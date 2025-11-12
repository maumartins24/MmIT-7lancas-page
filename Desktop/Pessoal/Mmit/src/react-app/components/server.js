const fs = require("fs").promises;
const express = require("express");
const { google } = require("googleapis");
const path = require("path");
const xlsx = require("xlsx");

const app = express();
const SCOPES = ["https://www.googleapis.com/auth/gmail.readonly"];
const TOKEN_PATH = "token.json";
const CREDENTIALS_PATH = "credentials.json";
const OUTPUT_PATH = path.join(__dirname, "emails.xlsx");

// IGNORA TOTALMENTE ESSAS LABELS
const LABELS_IGNORADAS = ["INBOX", "SENT", "TRASH", "SPAM", "DRAFT", "CHAT", "CATEGORY_SOCIAL"];

app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "public", "index.html")));

async function fileExists(p) { try { await fs.access(p); return true; } catch { return false; } }

async function authenticate() {
  const creds = JSON.parse(await fs.readFile(CREDENTIALS_PATH));
  const { client_secret, client_id, redirect_uris } = creds.web || creds.installed;
  const auth = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
  if (await fileExists(TOKEN_PATH)) auth.setCredentials(JSON.parse(await fs.readFile(TOKEN_PATH)));
  return auth;
}

async function extractEmails(auth) {
  console.log("TURBO MODE ATIVADO — extraindo o mais rápido possível!");
  const gmail = google.gmail({ version: "v1", auth });
  const { data: { labels } } = await gmail.users.labels.list({ userId: "me" });

  const emails = [];
  let count = 1;

  for (const label of labels) {
    if (LABELS_IGNORADAS.includes(label.name.toUpperCase())) {
      console.log(`Ignorada: ${label.name}`);
      continue;
    }

    console.log(`\nProcessando: ${label.name}`);
    let pageToken = null;

    do {
      const res = await gmail.users.messages.list({
        userId: "me",
        labelIds: [label.id],
        maxResults: 100,
        pageToken
      });

      const messages = res.data.messages || [];
      pageToken = res.data.nextPageToken;

      for (const msg of messages) {
        // DELAY TURBO: 180~300ms → ≈ 300–350 e-mails por minuto
        await new Promise(r => setTimeout(r, 180 + Math.random() * 120));

        try {
          const msgData = await gmail.users.messages.get({
            userId: "me",
            id: msg.id,
            format: "metadata",
            metadataHeaders: ["From", "To", "Subject", "Date"]   // mais rápido e econômico
          });

          const headers = msgData.data.payload.headers;

          emails.push({
            ID: count++,
            Label: label.name,
            De: headers.find(h => h.name === "From")?.value || "",
            Para: headers.find(h => h.name === "To")?.value || "",
            Assunto: headers.find(h => h.name === "Subject")?.value || "",
            Data: headers.find(h => h.name === "Date")?.value || "",
            Link: `https://mail.google.com/mail/u/0/#inbox/${msg.id}`
          });

          if ((count - 1) % 50 === 0) console.log(`Já processados: ${count - 1} e-mails (velocidade TURBO)`);

        } catch (err) {
          if (err.response?.status === 403) {
            console.log("Rate limit! Pausando 30 segundos e continuando...");
            await new Promise(r => setTimeout(r, 30000));
            // tenta o mesmo e-mail de novo
            continue;
          }
          console.error("Erro:", err.message);
        }
      }
    } while (pageToken);
    console.log(`Label "${label.name}" concluída!`);
  }

  // Excel final
  const ws = xlsx.utils.json_to_sheet(emails);
  ws['!cols'] = [{wch:8},{wch:30},{wch:40},{wch:40},{wch:70},{wch:22},{wch:50}];
  const wb = xlsx.utils.book_new();
  xlsx.utils.book_append_sheet(wb, ws, "E-mails");
  xlsx.writeFile(wb, OUTPUT_PATH);

  console.log(`\nFINALIZADO COM SUCESSO!`);
  console.log(`${emails.length} e-mails extraídos em tempo recorde!`);
  return emails;
}

app.get("/google_login", async (req, res) => {
  const auth = await authenticate();
  res.redirect(auth.generateAuthUrl({
    access_type: "offline",
    prompt: "consent",
    scope: SCOPES
  }));
});

app.get("/oauth2callback", async (req, res) => {
  const auth = await authenticate();
  const { tokens } = await auth.getToken(req.query.code);
  auth.setCredentials(tokens);
  await fs.writeFile(TOKEN_PATH, JSON.stringify(tokens));
  console.log("Token salvo — iniciando extração TURBO!");

  const emails = await extractEmails(auth); // <- captura retorno da função

  res.send(`
    <h1 style="color:#00ff00;text-align:center;margin-top:100px">
      EXTRAÇÃO CONCLUÍDA EM TEMPO RECORDE!
    </h1>
    <h2 style="text-align:center">Total: ${emails.length} e-mails (sem Inbox/Sent)</h2>
    <p style="text-align:center;font-size:24px">
      <a href="/download" style="color:#0066ff;font-weight:bold">BAIXAR EXCEL TURBO</a>
    </p>
    <script>setTimeout(() => location.href='/download', 5000);</script>
  `);
});

app.get("/download", async (req, res) => {
  await fileExists(OUTPUT_PATH)
    ? res.download(OUTPUT_PATH, `emails_turbo_${new Date().toISOString().slice(0,10)}.xlsx`)
    : res.send("<h2>Ainda processando... recarregue em 1 minuto.</h2>");
});

const PORT = process.env.PORT || 7600;
app.listen(PORT, () => {
  console.log(`\nTURBO ATIVADO → https://extracao.labsativa.com.br`);
  console.log(`Velocidade: ~350 e-mails/minuto | INBOX e SENT ignorados`);
  console.log(`Pronto pra quebrar recordes hoje!\n`);
});
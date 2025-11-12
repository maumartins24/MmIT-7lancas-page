import { FaInstagram } from "react-icons/fa";
import logoAzul from "@/images/7lanca_azul-removebg-preview.png";
import logoVermelha from "@/images/7lanca_vermelho-removebg-preview.png";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-black/50 backdrop-blur-lg border-b border-blue-100 dark:border-red-800 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-2 md:py-2.5">
        {/* Logo à esquerda */}
        <div className="flex items-center gap-2">
          {/* Modo claro */}
          <img
            src={logoAzul}
            alt="Símbolo Ogum 7 Lanças - modo claro"
            className="w-14 h-14 object-contain dark:hidden transition-transform duration-300"
          />

          {/* Modo escuro */}
          <img
            src={logoVermelha}
            alt="Símbolo Ogum 7 Lanças - modo escuro"
            className="w-14 h-14 object-contain hidden dark:block transition-transform duration-300"
          />
        </div>

        {/* Nome central */}
        <h1 className="text-xl md:text-2xl font-extrabold tracking-tight text-blue-700 dark:text-red-400 text-center flex-1 transition-colors duration-300">
          Encruzilhada dos Saberes
        </h1>

        {/* Ícone do Instagram à direita */}
        <a
          href="https://www.instagram.com/ogumsetelancas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-blue-700 dark:text-red-400 hover:scale-110 transition-transform duration-200 relative z-10"
        >
          <FaInstagram size={30} />
        </a>
      </div>
    </header>
  );
}

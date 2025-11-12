import { useEffect, useRef, useState } from "react";

// 1) Importe suas fotos locais (coloque os arquivos em src/images/)
import f1 from "@/images/insta1.jpg";
import f2 from "@/images/insta2.jpg";
import f3 from "@/images/insta3.jpg";
import f4 from "@/images/insta4.jpg";
import f5 from "@/images/insta5.jpg";
import nos from "@/images/nos.jpg"

export default function InstagramGrid() {
  const slides = [
    { id: 1, src: f1, alt: "Gira de Ogum" },
    { id: 2, src: f2, alt: "Estudo coletivo" },
    { id: 3, src: f3, alt: "Evento comunitário" },
    { id: 4, src: f4, alt: "Trabalho espiritual" },
    { id: 5, src: f5, alt: "Convívio da comunidade" },
    { id: 6, src: nos, alt: "Nós" },
  ];

  const [index, setIndex] = useState(0);
  const timer = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // 2) Autoplay (ajuste o delay ou desative com 0)
  const autoPlayMs = 4500;

  useEffect(() => {
    if (!autoPlayMs) return;
    if (timer.current) window.clearInterval(timer.current);
    timer.current = window.setInterval(next, autoPlayMs);
    return () => { if (timer.current) window.clearInterval(timer.current); };
  }, [index]);

  // 3) Swipe no mobile
  const onTouchStart = (e: React.TouchEvent) => (touchStartX.current = e.touches[0].clientX);
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    touchStartX.current = null;
  };

  // 4) Navegação por teclado
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section className="py-20 bg-white dark:bg-black transition-all duration-500">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-800 dark:text-red-400 mb-2">
            Nossa Jornada
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-red-100 max-w-2xl mx-auto">
            Fique conectado por nossas encruzilhadas e acompanhe nosso caminhar!
          </p>
        </div>

        {/* Carrossel */}
        <div
          className="relative w-full overflow-hidden rounded-2xl shadow-xl border border-blue-100 dark:border-red-800"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          aria-roledescription="carousel"
          aria-label="Galeria Instagram"
        >
          {/* faixa deslizante */}
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {slides.map((s, i) => (
              <a
                key={s.id}
                href="https://www.instagram.com/ogumsetelancas/"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-full h-[320px] md:h-[420px] lg:h-[480px] block bg-black/5"
                aria-label={`Abrir foto ${i + 1} no Instagram`}
              >
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </a>
            ))}
          </div>

          {/* setas */}
          <button
            onClick={prev}
            aria-label="Foto anterior"
            className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/60 text-black dark:text-white shadow hover:scale-105 transition"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Próxima foto"
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 dark:bg-black/60 text-black dark:text-white shadow hover:scale-105 transition"
          >
            ›
          </button>

          {/* indicadores */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Ir para foto ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 rounded-full transition
                  ${i === index
                    ? "bg-blue-600 dark:bg-red-500 w-6"
                    : "bg-white/70 dark:bg-black/50 w-2.5"}`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <a
            href="https://www.instagram.com/ogumsetelancas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-700 dark:from-red-500 dark:to-red-700 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Seguir @ogumsetelancas
          </a>
        </div>
      </div>
    </section>
  );
}

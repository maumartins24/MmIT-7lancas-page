export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="flex items-center justify-center bg-gradient-to-br from-white via-blue-50 to-blue-100 dark:from-black dark:via-neutral-950 dark:to-neutral-900 transition-all duration-500"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1
            id="hero-title"
            className="
    antialiased font-sans font-extrabold tracking-tight leading-tight
    text-[clamp(2.5rem,8vw,4.5rem)]
    text-blue-700
    dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-red-400 dark:to-red-600
    drop-shadow-[0_1px_0_rgba(255,255,255,.75)]
    dark:drop-shadow-none
    dark:[-webkit-text-stroke:0.6px_theme(colors.red.900)]
  "
          >
            Ogum 7 Lanças
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-neutral-200 leading-relaxed">
            ⚔️ Templo Umbandista Sr. Ogum Sete Lanças e Pai João de Aruanda. ⚔️
          </p>

          {/* CTAs opcionais */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#sobre"
              className="inline-flex items-center rounded-xl px-5 py-3 text-base font-medium bg-blue-600 text-white hover:bg-blue-700 dark:bg-red-600 dark:hover:bg-red-700 shadow-lg transition"
            >
              Conheça o Terreiro
            </a>
            <a
              href="#contato"
              className="inline-flex items-center rounded-xl px-5 py-3 text-base font-medium bg-white text-blue-700 border border-blue-200 hover:bg-blue-50 dark:bg-transparent dark:text-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800 transition"
            >
              Conheça nosso Sacerdote
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14">
            {/* Card 1 */}
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 dark:border-neutral-800 shadow-lg">
              <div className="w-14 h-14 bg-blue-600 dark:bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-neutral-100 mb-1">
                Comunidade
              </h3>
              <p className="text-gray-600 dark:text-neutral-300">
                Crescendo como comunidade e construindo caminhos.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 dark:border-neutral-800 shadow-lg">
              <div className="w-14 h-14 bg-blue-600 dark:bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-neutral-100 mb-1">
                Experiências
              </h3>
              <p className="text-gray-600 dark:text-neutral-300">
                Partilhas, giras, trabalhos e eventos.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white/80 dark:bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-blue-100 dark:border-neutral-800 shadow-lg">
              <div className="w-14 h-14 bg-blue-600 dark:bg-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  aria-hidden="true"
                  className="w-7 h-7 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-neutral-100 mb-1">
                Crescimento
              </h3>
              <p className="text-gray-600 dark:text-neutral-300">
                Estudos e desenvolvimento espiritual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

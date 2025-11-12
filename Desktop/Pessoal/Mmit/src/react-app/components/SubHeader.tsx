export default function SubHeader() {
  const menuItems = [
    { name: "Sobre nós", href: "#sobre" },
    { name: "Conquistas", href: "#conquistas" },
    { name: "Localização", href: "#localizacao" },
    { name: "Conheça nossa lojinha", href: "#lojinha" },
    { name: "Rifas & Oportunidades", href: "#rifas" },
  ];

  return (
    <nav className="sticky top-20 z-40 bg-white/70 dark:bg-black/40 backdrop-blur-md border-b border-blue-100 dark:border-red-800 shadow-sm">
      <ul className="flex flex-wrap justify-center gap-6 py-3 text-sm md:text-base font-medium">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a
              href={item.href}
              className="text-blue-800 dark:text-red-300 hover:text-blue-600 dark:hover:text-red-400 transition-colors duration-200"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

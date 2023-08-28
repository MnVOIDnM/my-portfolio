function Nav() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    // { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-slate-800 sm:px-12 py-2 w-full sticky top-0 z-10 opacity-90">
      <nav className="flex justify-between items-center">
        <ul className="text-white flex-1 flex justify-center items-center lg:gap-28 gap-6">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="leading-normal text-xl">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;

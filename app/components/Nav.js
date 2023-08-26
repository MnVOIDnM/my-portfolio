function Nav() {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-slate-800 sm:px-16 px-8 py-4 w-full sticky top-0">
      <nav className="flex justify-between items-center mx-auto my-0">
        <ul className="text-white flex-1 flex justify-center items-center lg:gap-32 gap-16">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="leading-normal text-lg">
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

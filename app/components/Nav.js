import { Bars3Icon } from "@heroicons/react/24/outline";

function Nav() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-w-screen-xl mx-auto my-0">
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a href={item.href} className="leading-normal text-lg">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden max-lg:block">
          <Bars3Icon className="h-6 w-6 ml-3" />
        </div>
      </nav>
    </header>
  );
}

export default Nav;

import { navItems, contact } from "../data/portfolio";

function Header() {
  return (
    <header className="topbar">
      <a className="brand" href="#home">
        HS
      </a>
      <nav className="nav">
        {navItems.map((item) => (
          <a key={item.href} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <a className="nav-cta" href={`mailto:${contact.email}`}>
        Say Hello
      </a>
    </header>
  );
}

export default Header;

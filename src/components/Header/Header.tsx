import module from "./Header.module.css";

function Header() {
  return (
    <header aria-label="Início do site" id="home">
      <nav className={module.nav}>
        <li>
          <a href="#" className={module.username}>
            IslanP1
          </a>
        </li>
        <div className={module.navegacao}>
          <li>
            <a href="#" id="styleLinkHome">
              Home
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </div>
      </nav>
    </header>
  );
}

export default Header;

import { useState } from "react";
import { Drawer } from "antd";
import module from "./Header.module.css";

function Header() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header aria-label="Início do site" id="home">
      <nav className={module.nav}>
        <li>
          <a href="#home" className={module.username}>
            IslanP1
          </a>
        </li>
        <div className={module.navegacao}>
          <li>
            <a href="#home" id="styleLinkHome">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

          <i className="fa-solid fa-bars" onClick={showDrawer}></i>
        </div>

        <Drawer
          title={<span className={module.drawerTitle}>Menu</span>}
          placement="right"
          onClose={onClose}
          open={open}
          className={module.drawer}
          closeIcon={<i className={`fa-solid fa-times ${module.closeIcon}`} />} 
        >
          <li>
            <a href="#home" id="styleLinkHome">
              Home
            </a>
          </li>
          <li>
            <a href="#about-me">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </Drawer>
      </nav>
    </header>
  );
}

export default Header;

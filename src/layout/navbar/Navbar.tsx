import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoLL from "../../assets/images/domain/logo-ll.png";
import { useWindowSize } from "../../context/WindowsSizeProvider";
import { MdMenu, MdOutlineClose } from "react-icons/md";
import { motion } from "framer-motion";
import "./navbar.scss";

const Navbar = () => {
  const { pathname } = useLocation();
  const windowSize = useWindowSize();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      document.body.classList.remove("overflow-hidden");
    } else {
      document.body.classList.add("overflow-hidden");
    }
  }

  useEffect(() => {
    if(windowSize.isMobile === false) {
      setMenuOpen(false);
    }
  }, [windowSize.isMobile]);

  return (
    <>
      {
      pathname !== "/cardcontacto" && (
        <aside id="navigation_main" className="navigation_container">
          {
            windowSize.isMobile ? (
              <nav className="navbar">
                <div className="logo">
                  <Link to={"/"}>
                    <img src={logoLL} alt="Logo Luciano Legnoverde" />
                  </Link>
                </div>
                <MdMenu className="icon_menu" tabIndex={0} aria-roledescription="Abrir menú" aria-label="Menú" onClick={handleOpenMenu}/>
                {
                  menuOpen && (
                    <motion.div className="menu_reponsive_navigation" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div className="icon_close-menu">
                        <MdOutlineClose className="icon_menu" aria-roledescription="Cerrar menú" tabIndex={0} aria-label="Menú" onClick={handleOpenMenu}/>
                      </div>
                      <ul className="menu_list_responsive">
                      {
                        pathname === "/" ? (
                          <>
                            <li>
                              <a href="#about" className="text" aria-label="Sobre mí" onClick={handleOpenMenu}>
                                Sobre mí
                              </a>
                            </li>
                            <li>
                              <a href="#services" className="text" aria-label="Mis servicios" onClick={handleOpenMenu}>
                                Mis servicios
                              </a>
                            </li>
                          </>
                          ) : (
                            <li>
                              <Link to={"/"} className="text" aria-label="Home" onClick={handleOpenMenu}>
                                Inicio
                              </Link>
                            </li>
                          )
                        }
                        <li>
                          <Link to={"/prensa"} className="text" aria-label="Prensa" onClick={handleOpenMenu}>
                            Prensa
                          </Link>
                        </li>
                        <li>
                          <Link to={"/contacto"} className="text" aria-label="Contacto" onClick={handleOpenMenu}>
                            Contacto
                          </Link>
                        </li>
                      </ul>
                    </motion.div>
                  )
                }
              </nav>
            ) : (
              <nav className="navbar" id="nav_desktop">
                <div className="logo">
                  <Link to={"/"}>
                    <img src={logoLL} alt="Logo Luciano Legnoverde" />
                  </Link>
                </div>
                <ul className="items_list">
                  {
                    pathname === "/" ? (
                      <>
                        <li>
                          <a href="#about" className="text" aria-label="Sobre mí">
                            Sobre mí
                          </a>
                        </li>
                        <li>
                          <a href="#services" className="text" aria-label="Mis servicios">
                            Mis servicios
                          </a>
                        </li>
                      </>
                    ) : (
                      <>
                        <li>
                          <Link to={"/"} className="text" aria-label="Home">
                            Inicio
                          </Link>
                        </li>
                      </>
                    )
                  }
                  <li>
                    <Link to={"/prensa"} className="text" aria-label="Prensa">
                      Prensa
                    </Link>
                  </li>
                  <li>
                    <Link to={"/contacto"} className="text" aria-label="Contacto">
                      Contacto
                    </Link>
                  </li>
                </ul>
              </nav>
            )
          }
        </aside>
      )
    }
    </>
  );
};

export default Navbar;

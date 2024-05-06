import { motion } from "framer-motion";
import "./footer.scss";

import logoLL from "../../assets/images/domain/logo-ll-white.png";
import socialFacebook from "../../assets/images/rrss/facebook.svg";
import socialInstagram from "../../assets/images/rrss/instagram.svg";
import socialLinkedin from "../../assets/images/rrss/linkedin.svg";
import { appConfig } from "../../config/applicationConfig";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const { pathname } = useLocation();

  return (
    <>
    {
      pathname !== "/cardcontacto" && (
      <footer id="footer">
        <section className="footer_container">
          <div className="social_container">
            <div className="logo_container">
              <img src={logoLL} alt="Luciano Legnoverde Logo" />
            </div>

            <ul className="items_link">
              <li>
                <a href="#about">Sobre mí</a>
              </li>
              <li>
                <a href="#services">Mis Servicios</a>
              </li>
              <li>
                <a href="#press">Prensa</a>
              </li>
              <li>
                <Link to={"/contacto"}>Contacto</Link>
              </li>
            </ul>

            <div className="social_links">
              <motion.a
                href={appConfig.INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                >
                <img src={socialInstagram} alt="Instagram" />
              </motion.a>
              <motion.a
                href={appConfig.LINKEDIN_URL}
                target="_blank"
                rel="noreferrer"
                className="link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                >
                <img src={socialLinkedin} alt="Linkedin" />
              </motion.a>
              <motion.a
                href={appConfig.FACEBOOK_URL}
                target="_blank"
                rel="noreferrer"
                className="link"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
                >
                <img src={socialFacebook} alt="Facebook" />
              </motion.a>
            </div>
          </div>

          <span className="line_separator"></span>

          <div className="copyright">
            <h4>
              &copy; {new Date().getFullYear()} | Luciano Legnoverde - Todos los derechos reservados
            </h4>
            <span>
              Desarrollado por{" "}
              <a
                href="https://www.fedesagency.com"
                target="_blank"
                rel="noreferrer"
                >
                Fedes
              </a>
            </span>
          </div>
        </section>
      </footer>
      )
    }
    </>
  );
};

export default Footer;

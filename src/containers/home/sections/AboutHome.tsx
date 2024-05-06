import { useEffect, useRef } from "react";
import { motion, useSpring } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { appConfig } from "../../../config/applicationConfig";

import "./about-home.scss";
import aboutImage from "../../../assets/images/about/about.png";
import arrowImage from "../../../assets/images/about/arrow.svg";
import linkedinImage from "../../../assets/images/rrss/linkedin.svg";

import { FaArrowRightLong } from "react-icons/fa6";
import { useWindowSize } from "../../../context/WindowsSizeProvider";

const AboutHome = () => {
  const [cardRef, inView] = useInView({ threshold: 0.5 });
  const windowSize = useWindowSize();

  const scaleProgress = useRef(useSpring(1)).current;
  const opacityProgress = useRef(useSpring(1)).current;

  useEffect(() => {
    if(windowSize.isMobile) {
      scaleProgress.set(1);
      opacityProgress.set(1);
    } else {
      scaleProgress.set(inView ? 1 : 0.7);
      opacityProgress.set(inView ? 1 : 0.5);
    }
  }, [inView]);

  return (
    <section id="about" className="about_section">
      <div className="about_container">
        <motion.div
          className="card"
          ref={cardRef}
          style={{
            scale: scaleProgress,
            opacity: opacityProgress,
          }}
        >
          <img
            src={aboutImage}
            alt="Luciano Legnoverde - Sobre mi"
            className="luciano_about-img"
          />
          <div className="card_description">
            <div className="about_text">
              <h3 className="subtitle">Sobre mí</h3>
              <ul>
                <li>
                  <span className="icon">
                    <FaArrowRightLong />
                  </span>
                  <p>
                    Habiéndome graduado de Licenciado en Economía (UNLP) y{" "}{/*<br /> */}
                    Magister en Finanzas (UTDT), me propongo como meta <b>poner {/*<br /> */}
                    la economía al servicio de las personas y empresas para {/*<br /> */}
                    ayudarlas a lograr sus objetivos financieros.</b>
                  </p>
                </li>

                <li>
                  <span className="icon">
                    <FaArrowRightLong />
                  </span>
                  <p>
                    Comprometido en promover la <b>educación financiera</b>, realizo {/*<br /> */}
                    artículos de divulgación económica, brindo cursos y charlas {/*<br /> */}
                    para el público en general y soy Director del Instituto de {/*<br /> */}
                    Educación Financiera de la Fundación Pro Humanae Vitae.
                  </p>
                </li>

                <li>
                  <span className="icon">
                    <FaArrowRightLong />
                  </span>
                  <p>
                    Participo en programas de radio y televisión, di una <b>charla {/*<br /> */}
                    TEDx</b> y Mundo de las ideas.
                  </p>
                </li>
              </ul>
            </div>
            <motion.a
              href={appConfig.LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              className="main-button"
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <img src={linkedinImage} alt="Linkedin Luciano Legnoverde" />{" "}
              Visitá mi linkedin
            </motion.a>
          </div>
        </motion.div>

        <img src={arrowImage} alt="Arrow image" className="absolute_arrow-section" />
      </div>
    </section>
  );
};

export default AboutHome;

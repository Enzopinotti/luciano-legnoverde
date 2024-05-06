import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { appConfig } from '../../../config/applicationConfig';
import { useInView } from 'react-intersection-observer';
import { sendMsgWhatsapp } from '../../../utils/WspMessage';

import './banner-home.scss';
import workspaceImage from '../../../assets/images/home_presentation/workspace_premium.svg';
import conferenceImage from '../../../assets/images/home_presentation/conference-room.svg';
import personsImage from '../../../assets/images/home_presentation/persons.svg';
import lucianoImage from '../../../assets/images/domain/luciano_face.png';

import socialFacebook from "../../../assets/images/rrss/facebook_dark.svg";
import socialInstagram from "../../../assets/images/rrss/instagram_dark.svg";
import socialLinkedin from "../../../assets/images/rrss/linkedin_dark.svg";

import texturaBg from "../../../assets/images/domain/textura.jpg"

const BannerHome = () => {
  const { ref: countRef, inView: countInView } = useInView();
  const { ref: conferenceRef, inView: conferenceInView } = useInView();
  const { ref: clientRef, inView: clientInView } = useInView();
  
  const [count, setCount] = useState(1);
  const [countConference, setCountConference] = useState(1);
  const [countClient, setCountClient] = useState(1);

  useEffect(() => {
    let countTimer: any;
    if (countInView && count < 15) {
      countTimer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 100);
    }
    return () => {
      clearInterval(countTimer);
    };
  }, [countInView, count]);

  useEffect(() => {
    let aboutTimer: any;
    if (conferenceInView && countConference < 40) {
      aboutTimer = setInterval(() => {
        setCountConference(prevCount => prevCount + 1);
      }, 35);
    }
    return () => {
      clearInterval(aboutTimer);
    };
  }, [conferenceInView, countConference]);

  useEffect(() => {
    let aboutTimer: any;
    if (clientInView && countClient < 120) {
      aboutTimer = setInterval(() => {
        setCountClient(prevCount => prevCount + 1);
      }, 13);
    }
    return () => {
      clearInterval(aboutTimer);
    };
  }, [clientInView, countClient]);

  return (
    <section id="home" className="home_section">
      <div className='presentation'>
        <div className='domain_text'>
          <motion.h2 className='title' initial={{ opacity: 0, x: -850 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0 }}>
            Economía al servicio
          </motion.h2>
          <motion.h2 className='subtitle' initial={{ opacity: 0, x: -850 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            De las personas
          </motion.h2>
          <motion.p className='description' initial={{ opacity: 0, x: -850 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.6 }}>
            Las estrategias de inversión personalizadas y el asesoramiento financiero experto que <br /> 
            necesitás para alcanzar tus metas financieras con confianza y claridad.
          </motion.p>
          <motion.div initial={{ opacity: 0, x: -850 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.9 }}>
            <motion.button 
              className='main-button fit-content' 
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => sendMsgWhatsapp('Hola, visité el sitio de Luciano y me gustaría contactar con él', appConfig.NUMBER_PHONE_WPS)}
              >
              trabajemos juntos
            </motion.button>
          </motion.div>

          <div className="social_links">
            <motion.div className="follow" initial={{ opacity: 0, x: -850 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.2 }}>
              <p>Seguime en:</p>
              <motion.a href={appConfig.INSTAGRAM_URL} target="_blank" rel="noreferrer" className='social_link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
                <img src={socialInstagram} alt="Instagram" />
              </motion.a>
              <motion.a href={appConfig.LINKEDIN_URL} target="_blank" rel="noreferrer" className='social_link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
                <img src={socialLinkedin} alt="Linkedin" />
              </motion.a>
              <motion.a href={appConfig.FACEBOOK_URL} target="_blank" rel="noreferrer" className='social_link' whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.2 }}>
                <img src={socialFacebook} alt="Facebook" />
              </motion.a>
            </motion.div>
            <motion.span className="line_social_links" initial={{ opacity: 0, x: -850 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.5 }}></motion.span>
          </div>

        </div>

        <motion.div className='image_luciano' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 2.1 }}>
          <img src={lucianoImage} alt="Luciano Legnoverde" />
        </motion.div>
      </div>

      <article className='workout'>
        <motion.div className='workout_item' whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <img src={workspaceImage} alt="Workspace" />
          <span>
            <p className='bold_text'ref={countRef}>+{count}</p>
            <p className='light_text'>de experiencia</p>
          </span>
        </motion.div>

        <motion.div className='workout_item' whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <img src={conferenceImage} alt="Workspace" />
          <span>
            <p className='bold_text' ref={conferenceRef}>+{countConference}</p>
            <p className='light_text'>conferencias</p>
          </span>
        </motion.div>

        <motion.div className='workout_item' whileHover={{ scale: 1.2 }} transition={{ type: "spring", stiffness: 400, damping: 10 }}>
          <img src={personsImage} alt="Workspace" />
          <span>
            <p className='bold_text' ref={clientRef}>+{countClient}</p>
            <p className='light_text'>clientes</p>
          </span>
        </motion.div>
      </article>

      <img src={texturaBg} alt="" className="textura" />
    </section>
  )
}

export default BannerHome
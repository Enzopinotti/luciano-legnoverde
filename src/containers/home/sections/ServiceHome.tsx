import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import './service-home.scss';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useWindowSize } from '../../../context/WindowsSizeProvider';
import { sendMsgWhatsapp } from '../../../utils/WspMessage';
import { appConfig } from '../../../config/applicationConfig';
import { MdWhatsapp } from 'react-icons/md';

const ServiceHome = () => {
  const [cardRef, inView] = useInView({ threshold: 0.5 });
  const controls = useAnimation();
  const { isMobile } = useWindowSize();

  const cardAnimation = {
    hidden: { opacity: 0.01, x: -550, rotate: 25 },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
  };

  const cardAnimationMobile = {
    hidden: { opacity: 0.5 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    }
  }

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <section id='services' className='services_section'>
      <div className='services_container'>

        <div className="title_section">
          <h3 className='subtitle'>Mis Servicios</h3>
          <p className="description">
            Accedé a múltiples <b>servicios profesionales</b> y a la atención personalizada que necesitás para  <br />
            alcanzar tus <b>objetivos financieros</b>.
          </p>
        </div>

        <motion.div 
          className="card_sections"
          ref={cardRef}
        >
          <motion.div className="card"
            animate={controls}
            initial="hidden"
            variants={isMobile ? cardAnimationMobile : cardAnimation}
          >
            <div className="title_card">
              <h3>
                Finanzas Personales
              </h3>
            </div>
            <div className="description">
              <h5>
                Invertí tus ahorros de forma eficiente
              </h5>
              <ul>
                <li>
                  <span className="icon"><FaArrowRightLong /></span>
                  <p>Inversiones financieras</p>
                </li>
                <li>
                  <span className="icon"><FaArrowRightLong /></span>
                  <p>Asesoramiento personalizado</p>
                </li>
                <li>
                  <span className="icon"><FaArrowRightLong /></span>
                    <p>Acceso a múltiples mercados</p>
                </li>
              </ul>
            </div>
            <div className="flex-center mt-32">
              <span onClick={() => sendMsgWhatsapp('Hola! Me contacto por el servicio de finanzas personales', appConfig.NUMBER_PHONE_WPS)} className="main-button fit-content"><MdWhatsapp style={{fontSize: '1.5rem'}} /> ¡Empecemos!</span>
            </div>
          </motion.div>

          <motion.div 
            className="card"
            animate={controls}
            initial="hidden"
            variants={isMobile ? cardAnimationMobile : cardAnimation}
          >
            <div className="title_card">
              <h3>
                Finanzas para empresas
              </h3>
            </div>
            <div className="description">
              <h5>
                Planificá y gestioná el futuro de tu negocio
              </h5>
              <ul>
                <li>
                  <span className="icon"><FaArrowRightLong /></span>
                  <p>Administración de liquidez</p>
                </li>
                <li>
                  <span className="icon"><FaArrowRightLong /></span>
                  <p>Análisis económico</p>
                </li>
                <li>
                  <span className="icon"><FaArrowRightLong /></span>
                    <p>Estrategias de negocios</p>
                </li>
              </ul>
            </div>
            <div className="flex-center mt-32">
              <span onClick={() => sendMsgWhatsapp('Hola! Me contacto por el servicio de finanzas para empresas', appConfig.NUMBER_PHONE_WPS)} className="main-button fit-content"><MdWhatsapp style={{fontSize: '1.5rem'}} /> ¡Empecemos!</span>
            </div>
          </motion.div>

          <motion.div className="card"           
            animate={controls}
            initial="hidden"
            variants={isMobile ? cardAnimationMobile : cardAnimation}
          >
            <div className="title_card">
              <h3>
                Educación financiera
              </h3>
            </div>
            <div className="description">
              <h5>
                Capacitate y mejorá tus finanzas personales
              </h5>
              <ul>
                <li>
                  <span className="icon"><FaArrowRightLong /></span>
                  <p>Cursos y workshops a medida</p>
                </li>
                <li>
                  <span className="icon"><FaArrowRightLong /></span>
                  <p>Speaking en eventos</p>
                </li>
                <li>
                  <span className="icon"><FaArrowRightLong /></span>
                  <p>Análisis de actualidad</p>
                </li>
              </ul>
            </div>
            <div className="flex-center mt-32">
              <span onClick={() => sendMsgWhatsapp('Hola! Me contacto por el servicio de educación financiera', appConfig.NUMBER_PHONE_WPS)} className="main-button fit-content"><MdWhatsapp style={{fontSize: '1.5rem'}} /> ¡Empecemos!</span>
            </div>
          </motion.div>

        </motion.div>

      </div>
    </section>
  )
}

export default ServiceHome
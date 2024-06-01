import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { appConfig } from "../../config/applicationConfig";
import { sendMsgWhatsapp } from "../../utils/WspMessage";

import './help-component.scss';
import { GrMailOption } from "react-icons/gr";
import { FaWhatsapp } from "react-icons/fa6";

const HelpComponent = () => {
  return (
    <div className='help_container'>
      <h3 className="title">Trabajemos juntos</h3>
      <p className="description">
        Ponete en contacto para evaluar en conjunto cómo alcanzar tus metas.
      </p>
      <Link to={'/contacto'}>
        <motion.button
          className="main-button fit-content" 
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
          Quiero consultar
        </motion.button>
      </Link>
      <span className="line"></span>
      <div className="flex-container">
        <div className="social-container">
          <a href={`mailto:${appConfig.MAIL_ADDRESS}`} className="rrss">
            <GrMailOption /> <p>{appConfig.MAIL_ADDRESS}</p> 
          </a>
        </div>
        <div className="social-container">
          <span className="rrss" onClick={() => sendMsgWhatsapp('Hola, visité el sitio de Luciano y me gustaría contactar con él', appConfig.NUMBER_PHONE_WPS)}>
            <FaWhatsapp /> <p>+54 9 221 541 9000</p> 
          </span>
        </div>
      </div>
    </div>
  )
}

export default HelpComponent;
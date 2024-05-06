import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

import BannerComponent from "../../components/banner/BannerComponent";
import { appConfig } from "../../config/applicationConfig";
import { BannerContact } from "../../utils/BannerData";
import { sendMsgWhatsapp } from "../../utils/WspMessage";

import './contact.scss';

import instagramImage from "../../assets/images/rrss/instagram_dark.svg";
import facebookImage from "../../assets/images/rrss/facebook_dark.svg";
import linkedinImage from "../../assets/images/rrss/linkedin_dark.svg";
import arrowContactImage from "../../assets/images/contact/arrow_contact.svg";

import { MdOutlineEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { isEmailValid, isFullnameValid, isMessageValid, isPhoneValid, isSubjectValid } from "../../utils/Validators";


const ContactContainer = () => {
  const [valueForm, setValueFrom] = useState({
    full_name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    full_name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const onChange = (e:any) => {
    const { name, value } = e.target;
    const trimmedValue = value.trim();
    setValueFrom({ ...value, [name]: trimmedValue });

    switch (name) {
      case 'full_name':
        setErrors({ ...errors, [name]: isFullnameValid(trimmedValue).errorMessage });
        break;
      case 'email':
        setErrors({ ...errors, [name]: isEmailValid(trimmedValue).errorMessage });
        break;
      case 'phone':
        setErrors({ ...errors, [name]: isPhoneValid(trimmedValue).errorMessage });
        break;
      case 'subject':
        setErrors({ ...errors, [name]: isSubjectValid(trimmedValue).errorMessage });
        break;
      case 'message':
        setErrors({ ...errors, [name]: isMessageValid(trimmedValue).errorMessage });
        break;
      default:
        break;
    }
  };
  
  const handleSubmit = (e:any) => {
    e.preventDefault();
    if (valueForm.full_name !== '' && valueForm.email !== '' && valueForm.phone !== '' && valueForm.subject !== '' && valueForm.message !== '') {
      emailjs
        .sendForm(
          appConfig.EMAIL_API.SERVICE_ID,
          appConfig.EMAIL_API.TEMPLATE_ID,
          e.target,
          appConfig.EMAIL_API.PUBLIC_KEY
        )
        .then((respone) => {
          if(respone.status === 200) {
            toast.success('¡Formulario de contacto enviado con éxito!', { position: "top-center" });
            e.target.reset();
          }
        })
        .catch(() => {
          toast.error('Error al enviar el formulario, intente de nuevo más tarde.', { position: "top-center" });
        });
    }
  };

  return (
    <>
      <BannerComponent banner={BannerContact} />
      <div id="contact_view" className="main_container">
        <div className="container_intro_section">
          <h1 className="title_global">Enviame tu consulta</h1>
          <p>
            Cada situación y objetivo financiero son únicos. <br />
            Póngase en contacto para evaluar en conjunto cómo alcanzar sus metas.
          </p>
        </div>
        <div className="form_container">
          <form onSubmit={handleSubmit} className="form_contact">
            <div className="form-input">
              <label htmlFor="full_name">Nombre y apellido</label>
              <input
                type="text"
                name="full_name"
                id="full_name"
                onChange={onChange}
                required
                minLength={5}
                maxLength={35}
              />
              {errors.full_name && <span className="error">{errors.full_name}</span>}
            </div>
            <div className="form-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={onChange}
                required
                minLength={5}
                maxLength={55}
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="flex-form_content">
              <div className="form-input">
                <label htmlFor="phone">Teléfono</label>
                <input
                  type="number"
                  id="phone"
                  onChange={onChange}
                  name="phone"
                  required
                />
                {errors.phone && <span className="error">{errors.phone}</span>}
              </div>
              <div className="form-input">
                <label htmlFor="subject">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  onChange={onChange}
                  name="subject"
                  required
                />
                {errors.subject && <span className="error">{errors.subject}</span>}
              </div>
            </div>
            <div className="form-input">
              <label htmlFor="message">Mensaje</label>
              <textarea
                name="message"
                id="message"
                required
                onChange={onChange}
              ></textarea>
              {errors.message && <span className="error">{errors.message}</span>}
            </div>

            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              type="submit"
              className="main-button fit-content"
            >
              Enviar
            </motion.button>
          </form>
        </div>
        <div className="contact_data">
          <div className="data">
            <h3>Seguime en:</h3>
            <ul>
              <li>
                <a href={appConfig.INSTAGRAM_URL} target="_blank" rel="noreferrer"><img src={instagramImage} /></a>
              </li>
              <li>
                <a href={appConfig.FACEBOOK_URL} target="_blank" rel="noreferrer"><img src={facebookImage} /></a>
              </li>
              <li>
                <a href={appConfig.LINKEDIN_URL} target="_blank" rel="noreferrer"><img src={linkedinImage} /></a>
              </li>
            </ul>
            <span className="line"></span>
          </div>
          <div className="links_luciano">
            <span className="rrss">
              <a href={`mailto:${appConfig.MAIL_ADDRESS}`}>
                <MdOutlineEmail className="icon" />
                <p>{appConfig.MAIL_ADDRESS}</p>
              </a>
            </span>
            <span className="rrss" onClick={() => sendMsgWhatsapp('Hola, visité el sitio de Luciano y me gustaría contactar con él', appConfig.NUMBER_PHONE_WPS)}>
              <span>
                <FaWhatsapp className="icon" /> <p>+54 9 221 541 9000</p> 
              </span>
            </span>
          </div>
        </div>
        <img src={arrowContactImage} alt="arrow" tabIndex={-1} className="arrow_contact" />
      </div>
    </>
  );
};

export default ContactContainer;

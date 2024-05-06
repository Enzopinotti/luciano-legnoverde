import './landing.scss';
import lucianoFace from "../../assets/images/domain/luciano_face_short.png";

const Landing = () => {
  return (
    <section id="landing" tabIndex={-1} className="landing_section">
      <div className='landing_container'>
        <img src={lucianoFace} alt="Luciano Legnoverde" className='img_luciano' />
        <h1>Luciano <span>Legnoverde</span></h1>
        <h4>Asesor financiero</h4>
        <a href="./docs/contactLucianoLegnoverde.vcf" className='main-button'>
          ¡Agendame!
        </a>
      </div>
    </section>
  )
}

export default Landing
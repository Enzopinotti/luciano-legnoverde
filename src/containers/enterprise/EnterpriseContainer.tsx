import BannerComponent from "../../components/banner/BannerComponent";
import HelpComponent from "../../components/help-component/HelpComponent";
import PlannerCardComponent from "../../components/planner-card-component/PlannerCardComponent";
import { BannerEnterprise } from "../../utils/BannerData";
import { PlannerCardEnterprise } from "../../utils/PlannerCard";

const EnterpriseContainer = () => {
  return (
    <>
      <BannerComponent banner={BannerEnterprise} />
      <div className="main_container">
        <div className="container_intro_section">
          <h1 className="title_global">Etapas del servicio</h1>
          <p>
            <b>Mantenerse en el mercado</b> requiere tomar decisiones de
            negocios en entornos cambiantes. <br />
            El trabajo diario nos concentra en el hoy pero descuida el futuro
            aumentando los riesgos de <br />
            perder terreno ante la competencia y quedar atados a los cambios
            económicos. Las soluciones <br />
            buscan pensar en el futuro sin descuidar el presente.
          </p>
        </div>
        <PlannerCardComponent planner={PlannerCardEnterprise} />
        <HelpComponent />
      </div>
    </>
  );
};

export default EnterpriseContainer;

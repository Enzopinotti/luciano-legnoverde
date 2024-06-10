import HelpComponent from "../../components/help-component/HelpComponent";
import pressData from "../../utils/PressData";
import SliderPress from "./sections/SliderPress";
import BannerComponent from "../../components/banner/BannerComponent";

import "./press_container.scss";
import arrowPressImage from "../../assets/images/press/press_arrow-section.svg";
import arrowPressDownImage from "../../assets/images/press/press_arrow-section_down.svg";

import { BannerPress } from "../../utils/BannerData";

const PressContainer = () => {
  const { pressInterview, pressArticles } = pressData;
  // const { pressInterview, pressNotes, pressArticles } = pressData;
  
  return (
    <>
      <BannerComponent banner={BannerPress} />
      <div className="main_container" id="press_container-page">
        <img src={arrowPressImage} alt="arrow" className="arrow_press_top" />
        <img src={arrowPressDownImage} alt="arrow" className="arrow_press_down" />
        <div className="press_container">
          <SliderPress pressDetail={pressInterview} showTitle={true} />
          {/* <SliderPress pressDetail={pressNotes} /> */}
          <SliderPress pressDetail={pressArticles}  showTitle={true} />
        </div>
        <HelpComponent />
      </div>
    </>
  );
};

export default PressContainer;

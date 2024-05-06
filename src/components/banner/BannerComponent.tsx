import { BannerModel } from "../../models/banner-model";
import "./banner-component.scss";

const BannerComponent = ({ banner }: { banner: BannerModel }) => {
  return (
    <div id="banner_component">
      <div className="main_container">
        <div className="banner_content">
          <div className="text_content">
            <h1>{banner.title}</h1>
            <p>{banner.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerComponent;

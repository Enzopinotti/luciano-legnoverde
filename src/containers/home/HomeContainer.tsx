import {
  BannerHome,
  AboutHome,
  ServiceHome,
  PressHome,
  ContactHome,
} from "./sections/";

const HomeContainer = () => {
  return (
    <div id="main_home" className="home_container">
      <BannerHome />
      <AboutHome />
      <ServiceHome />
      <PressHome />
      <ContactHome />
    </div>
  );
};

export default HomeContainer;

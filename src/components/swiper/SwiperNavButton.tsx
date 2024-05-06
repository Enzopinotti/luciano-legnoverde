import { useSwiper } from "swiper/react";
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";

export const SwiperNavButton = () => {
  const swiper = useSwiper();

  return (
    <div className="swiper-nav-btn" id="custom_swiper__btn">
      <button onClick={() => swiper.slidePrev()}><HiOutlineArrowLeft /></button>
      <button onClick={() => swiper.slideNext()}><HiOutlineArrowRight /></button>
    </div>
  );
};

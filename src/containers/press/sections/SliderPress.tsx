import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { SwiperNavButton } from "../../../components/swiper/SwiperNavButton";
import { PressDomainModel, PressModel } from "../../../models/press-model";

import 'swiper/css';
import 'swiper/css/navigation';
import "./slide-press.scss";
import { FaRegCirclePlay } from 'react-icons/fa6';
import { useState } from 'react';
import ModalVideo from '../../../components/modals/ModalComponent';
import { PressTypeEnum } from '../../../utils/enum';
import { FaExternalLinkAlt } from 'react-icons/fa';

const SliderPress = ({ pressDetail } : { pressDetail: PressDomainModel }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>("");

  const showModalVideo = (pressItem: PressModel) => {
    setSelectedVideoUrl(pressItem.externalLink);
    setModalOpen(true);
  };

  const redirectToExternalLink = (pressItem: PressModel) => {
    window.open(pressItem.externalLink, "_blank");
  }

  const handleCloseModal = () => {
    setSelectedVideoUrl("");
    setModalOpen(false);
  };

  return (
    <>
      <div id='swiper_slide_press'>
        <div className="header_press">
          <h2>{pressDetail.title}</h2>
        </div>
        <div className="swiper_container-press">
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper" slidesPerView={'auto'} loop={true}>
            <div className="btn-container">
              <SwiperNavButton />
            </div>
            {pressDetail.press.map((pressItem: PressModel) => (
              <SwiperSlide key={pressItem.id}>
                <div className="card">
                  <div className='img_container'>
                    <img src={`${pressItem.imagePath}`} alt={pressItem.description} />
                    {
                      pressItem.type === PressTypeEnum.VIDEO && (
                        <div className="play_hover">
                          <motion.span
                            className="icon"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => showModalVideo(pressItem)}
                            >
                            <FaRegCirclePlay />
                          </motion.span>
                        </div>
                      )
                    }
                    {
                      pressItem.type !== PressTypeEnum.VIDEO && (
                        <div className="play_hover">
                          <motion.span
                            className="external_link"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ duration: 0.2 }}
                            onClick={() => redirectToExternalLink(pressItem)}
                            >
                            <p>
                              Leer {" "}
                              {pressItem.type === PressTypeEnum.NOTE && 'nota completa'}
                              {pressItem.type === PressTypeEnum.ARTICLE && 'artículo'}
                            </p> <FaExternalLinkAlt />
                          </motion.span>
                        </div>
                      )
                    }
                  </div>
                  <h2>
                    {pressItem.description}
                    {pressItem.descriptionItalic && (
                      <span className="italic">: "{pressItem.descriptionItalic}"</span>
                    )}
                  </h2>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {modalOpen && (
        <ModalVideo
          isOpen={modalOpen}
          onClose={handleCloseModal}
          videoUrl={selectedVideoUrl}
        />
      )}
    </>
  );
};

export default SliderPress;

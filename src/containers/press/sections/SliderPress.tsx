import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { SwiperNavButton } from "../../../components/swiper/SwiperNavButton";
import { PressDomainModel, PressModel } from "../../../models/press-model";
import ModalVideo from '../../../components/modals/ModalComponent';
import 'swiper/css';
import 'swiper/css/navigation';
import "./slide-press.scss";
import { FaRegCirclePlay } from 'react-icons/fa6';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { IndexPdfEnum, PressTypeEnum } from '../../../utils/enum';
import { appConfig } from '../../../config/applicationConfig';
import { toast } from 'react-toastify';

const SliderPress = ({ pressDetail, showTitle } : { pressDetail: PressDomainModel, showTitle: boolean }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>("");

  const showModalVideo = (pressItem: PressModel) => {
    setSelectedVideoUrl(pressItem.externalLink);
    setModalOpen(true);
  };

  const showPdf = (pressItem: PressModel) => {
    if (pressItem.pdfPath) {
      switch (pressItem.pdfPath) {
        case IndexPdfEnum.FIRST:
          window.open(appConfig.PDF_LINKS.FIRST, "_blank");
          break;
        case IndexPdfEnum.SECOND:
          window.open(appConfig.PDF_LINKS.SECOND, "_blank")
          break; 
        case IndexPdfEnum.THIRD:
          window.open(appConfig.PDF_LINKS.THIRD, "_blank")
      }
    } else {
      toast.error("El PDF no se encuentra disponible en este momento.");
    }
  }

  const handleCloseModal = () => {
    setSelectedVideoUrl("");
    setModalOpen(false);
  };

  return (
    <>
      <div id='swiper_slide_press'>
        <div className="header_press">
          {showTitle && <h3>{pressDetail.title}</h3>}
        </div>
        <div className="swiper_container-press">
          <Swiper 
            navigation={true} 
            modules={[Navigation]} 
            className="mySwiper" 
            slidesPerView={'auto'} 
            loop={true}
            breakpoints={{
              540: {
                slidesPerView: 'auto',
                spaceBetween: 10,
              },
              0: {
                slidesPerView: 1,
                spaceBetween: 0,
              },
            }}
            >
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
                            onClick={() => showPdf(pressItem)}
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

import { useState } from "react";
import { motion } from "framer-motion";
import { appConfig } from "../../../config/applicationConfig";
import ModalVideo from "../../../components/modals/ModalComponent";

import "./press-home.scss";
import { FaRegCirclePlay } from "react-icons/fa6";
import youtubeLogo from "../../../assets/images/rrss/youtube_light.png";

import arrowImage from "../../../assets/images/service_home/arrow_right.svg";
import { PressTypeEnum } from "../../../utils/enum";
import pressData from "../../../utils/PressData";

const PressHome = () => {
  const [selectedTab, setSelectedTab] = useState<PressTypeEnum>(PressTypeEnum.VIDEO);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string>("");

  const handleImageClick = (videoUrl: string) => {
    setSelectedVideoUrl(videoUrl);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedVideoUrl("");
    setModalOpen(false);
  };

  const changeTab = (tab: PressTypeEnum) => {
    setSelectedTab(tab);
  };

  return (
    <section id="press" className="press_section">
      <div className="press_container">
        <div className="title_container">
          <h3 className="subtitle">Prensa</h3>
          <p className="description_section">
            Te invito a explorar mi participación en charlas, entrevistas, notas
            y artículos donde comparto <br />
            ideas valiosas, consejos prácticos y análisis de actividades
            económicas y financieras.
          </p>
        </div>

        <div className="tab_container">
          <div className="tab_selector">
            <h3
              onClick={() => changeTab(PressTypeEnum.VIDEO)}
              className={selectedTab === PressTypeEnum.VIDEO ? "active" : ""}
            >
              Charlas / Entrevistas
            </h3>
            <h3
              onClick={() => changeTab(PressTypeEnum.NOTE)}
              className={selectedTab === PressTypeEnum.NOTE ? "active" : ""}
            >
              Artículos / Notas
            </h3>
          </div>
          <div className="tab_content" tabIndex={-1} aria-label="Press">
            {selectedTab === PressTypeEnum.VIDEO && (
              <>
                <motion.div
                  className="slide_container"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  {
                    pressData.pressInterview.press.slice(0, 3).map((item, index) => (
                      <motion.div
                        key={index}
                        className="card_interview"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="img_container">
                          <img
                            src={item.imagePath}
                            alt={item.description}
                            loading="lazy"
                          />
                          <div className="play_hover">
                            <motion.span
                              className="icon"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              transition={{ duration: 0.2 }}
                              onClick={() =>
                                handleImageClick(item.externalLink)
                              }
                            >
                              <FaRegCirclePlay />
                            </motion.span>
                          </div>
                        </div>
                        <h3 className="video_description">
                          {item.description}
                          {item.descriptionItalic && (
                            <span>
                              : "{item.descriptionItalic}"
                            </span>
                            )
                          }
                        </h3>
                      </motion.div>
                    ))
                  }
                </motion.div>
              </>
            )}
            {selectedTab === PressTypeEnum.NOTE && (
              <motion.div
                className="slide_container"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {
                  pressData.pressNotes.press.slice(0, 3).map((note) => (
                    <motion.div
                      className="card_interview"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="img_container">
                        <img
                          src={note.imagePath}
                          alt={note.description}
                        />
                      </div>
                      <h3 className="video_description">
                        {note.description}
                      </h3>
                    </motion.div>
                  ))
                }
              </motion.div>
            )}
          </div>
        </div>

        <motion.a
          href={appConfig.YOUTUBE_URL}
          className="main-button fit-content"
          target="_blank"
          rel="noreferrer"
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img src={youtubeLogo} alt="Youtube" />
          Visitá mi canal
        </motion.a>
      </div>

      <span className="arrow_right">
        <img src={arrowImage} alt="" />
      </span>
      {modalOpen && (
        <ModalVideo
          isOpen={modalOpen}
          onClose={handleCloseModal}
          videoUrl={selectedVideoUrl}
        />
      )}
    </section>
  );
};

export default PressHome;

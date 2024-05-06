
import { motion, AnimatePresence } from 'framer-motion';

import './modal-video.scss';
import { AiOutlineClose } from 'react-icons/ai';

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.5,
      type: "back",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const ModalVideo = ({
  isOpen,
  onClose,
  videoUrl
}: {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}) => {

  const handleClose = () => {
    onClose();
  };

  const handleAnimationComplete = () => {
    if (!isOpen) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="modal-video" 
          variants={dropIn} 
          initial="hidden"
          animate="visible"
          exit="exit"
          onAnimationComplete={handleAnimationComplete}
        >
          <div className="modal-video__content">
            <iframe
              width="800"
              height="455"
              src={videoUrl}
              title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
          </div>
          <button onClick={handleClose}><AiOutlineClose /></button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ModalVideo;

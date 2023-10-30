import { useState } from "react";
import PropTypes from "prop-types";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styles from "./Modal.module.css";

const Modal = ({ onClose, images, currentIndex }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  const handlePrev = () => {
    const prevIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal}>
        <div className={styles.content}>
          <span className={styles.close} onClick={onClose}>
            &times;
          </span>
          <LazyLoadImage
            src={images[currentImageIndex].src}
            alt={images[currentImageIndex].alt}
            placeholderSrc={images[currentImageIndex].thumbnail}
            className={styles.image}
          />
          <button className={styles.prev} onClick={handlePrev}>
            &#8249;
          </button>
          <button className={styles.next} onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      thumbnail: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
  currentIndex: PropTypes.number.isRequired,
};

export default Modal;

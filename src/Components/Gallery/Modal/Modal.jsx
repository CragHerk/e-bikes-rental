import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import lozad from "lozad";
import styles from "./Modal.module.css";

const Modal = ({ onClose, images, currentIndex }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const modalRef = useRef(null);

  useEffect(() => {
    const observer = lozad(modalRef.current, {
      loaded: function(el) {
        el.classList.add(styles.loaded);
      },
    });
    observer.observe();

    setCurrentImageIndex(currentIndex);
  }, [currentIndex]);

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
          <img
            data-src={images[currentImageIndex].src}
            src={images[currentImageIndex].thumbnail}
            alt={images[currentImageIndex].alt}
            className={`${styles.image} ${styles.blurred}`}
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

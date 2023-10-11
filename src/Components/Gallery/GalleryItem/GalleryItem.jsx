import { useState } from "react";
import PropTypes from "prop-types";
import Modal from "../Modal/Modal";
import styles from "./GalleryItem.module.css";

const GalleryItem = ({ image }) => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={styles.item}>
      <img
        src={image.src}
        alt={image.alt}
        className={styles.image}
        onClick={handleOpenModal}
      />
      {modalOpen && <Modal image={image} onClose={handleCloseModal} />}
    </div>
  );
};

GalleryItem.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default GalleryItem;

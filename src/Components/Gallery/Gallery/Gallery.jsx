import PropTypes from "prop-types";
import GalleryItem from "../GalleryItem/GalleryItem";
import styles from "./Gallery.module.css";

const Gallery = ({ images }) => {
  return (
    <div className={styles.gallery}>
      {images.map((image, index) => (
        <GalleryItem key={index} image={image} />
      ))}
    </div>
  );
};

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Gallery;

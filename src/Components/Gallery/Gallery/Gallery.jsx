import PropTypes from "prop-types";
import GalleryItem from "../GalleryItem/GalleryItem";
import styles from "./Gallery.module.css";

const Gallery = ({ images }) => {
  return (
    <div className={styles.gallery_wrapper}>
      <div className={styles.icon_element}>
        <div className={styles.line}></div>
        <div className={styles.line2}></div>
        <img
          src="./assets/bike-simple.svg"
          alt="bike"
          className={styles.bike_img}
        />
      </div>
      <h1 className={styles.header_h1}>Galeria</h1>

      <div className={styles.header_h4}>
        Znajdź nas na Instagramie oraz Facebooku !
      </div>
      <div className={styles.socials_wrapper}>
        <a href="https://www.facebook.com/">
          <img />
        </a>
      </div>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <GalleryItem
            key={index}
            image={image}
            index={index}
            total={images.length}
            images={images}
          />
        ))}
      </div>
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

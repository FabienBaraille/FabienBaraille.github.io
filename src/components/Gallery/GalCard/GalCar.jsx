/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import PropTypes from 'prop-types';

const GalCar = ({
  title,
  descriptions,
  github,
  cover,
  images,
  siteUrl = null,
}) => {
  return (
    <div className="gal-card">
      <img src={cover} alt="cover" />
      <div className="details">
        <h3 className="title">{title}</h3>
        {descriptions.map(({ idD, descr }) => {
          return <p key={`descr${idD}`}>{descr}</p>;
        })}
        <p>
          Voici le lien du projet sur Github : <a href={github}>{github}</a>
        </p>
        {siteUrl && (
          <p>
            Retrouvez le projet en ligne : <a href={siteUrl}>{siteUrl}</a>
          </p>
        )}
        <div className="mini-gallery">
          {images.map((image) => {
            return <img key={image} src={image} alt="mini gallery" />;
          })}
        </div>
      </div>
    </div>
  );
};

GalCar.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.array,
  github: PropTypes.string,
  cover: PropTypes.string,
  images: PropTypes.array,
  siteUrl: PropTypes.string,
};

export default GalCar;

/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import { useRef } from 'react';

const GalCard = ({ datas, setCardNb }) => {
  const cardRef = useRef(null);

  const { title, descriptions, github, images, siteUrl = null } = datas;

  return (
    <div className="gal-card" ref={cardRef} onClick={() => setCardNb('')}>
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
  );
};

GalCard.propTypes = {
  datas: PropTypes.shape({
    title: PropTypes.string,
    descriptions: PropTypes.array,
    github: PropTypes.string,
    images: PropTypes.array,
    siteUrl: PropTypes.string,
  }).isRequired,
  setCardNb: PropTypes.func.isRequired,
};

export default GalCard;

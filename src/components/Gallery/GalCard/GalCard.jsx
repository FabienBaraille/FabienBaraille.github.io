/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import { useRef } from 'react';

import './GalCard.scss';

const GalCard = ({ datas, setCardNb }) => {
  const cardRef = useRef(null);

  const { title, descriptions, github, images, siteUrl = null } = datas;

  return (
    <div className="gal-card" ref={cardRef} onClick={() => setCardNb('')}>
      <div className="description">
        <h3 className="title">{title}</h3>
        {descriptions.map(({ idD, descr }) => {
          return <p key={`descr${idD}`}>{descr}</p>;
        })}
        <p>
          Voici le lien du projet sur Github :{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="link"
            href={github}
          >
            {github}
          </a>
        </p>
        {siteUrl && (
          <p>
            Retrouvez le projet en ligne :{' '}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="link"
              href={siteUrl}
            >
              {siteUrl}
            </a>
          </p>
        )}
      </div>
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

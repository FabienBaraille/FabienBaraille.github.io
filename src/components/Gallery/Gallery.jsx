/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useRef, useState } from 'react';
import datas from '../../assets/datas';
import GalCard from './GalCard/GalCard';
import './Gallery.scss';

const Gallery = () => {
  const divRef = useRef(null);
  const [cardNb, setCardNb] = useState('');

  const gallery = datas.map(({ id, cover, title }) => {
    return (
      <div
        id={id}
        key={id}
        ref={divRef}
        className="preview-card"
        onClick={(event) => {
          setCardNb(event.currentTarget.id);
        }}
      >
        <div className="layer">
          <p>{title}</p>
        </div>
        <img src={cover} alt="cover" />
      </div>
    );
  });
  return (
    <div className="gal-wrapper">
      {cardNb === '' ? (
        <>{gallery}</>
      ) : (
        <GalCard datas={datas[cardNb]} setCardNb={setCardNb} />
      )}
    </div>
  );
};

export default Gallery;

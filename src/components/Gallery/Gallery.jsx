import datas from '../../assets/datas';
import GalCar from './GalCard/GalCar';
import './Gallery.scss';

const Gallery = () => {
  const gallery = datas.map(({ id, ...rest }) => {
    return <GalCar key={id} {...rest} />;
  });
  return <div className="gal-wrapper">{gallery}</div>;
};

export default Gallery;

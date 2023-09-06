/* eslint-disable react/no-unescaped-entities */
import Loader from '../Loader/Loader';
import './InProgress.scss';

const InProgress = () => {
  return (
    <div className="load">
      <h4>Reconstruction en cours !</h4>
      <p>Après avoir progressé dans mon apprentissage du développement web,</p>
      <p>je remanie entièrement mon CV en React !</p>
      <Loader />
    </div>
  );
};

export default InProgress;

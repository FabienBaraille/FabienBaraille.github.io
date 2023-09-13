import './Card.scss';

const Card = () => {
  return (
    <div className="card">
      <div className="border">
        <h3>Fabien Baraille</h3>
        <div className="infos">
          <p className="fa" aria-hidden="true">
            41 ans
          </p>
          <p className="fa" aria-hidden="true">
            Pacsé, 1 enfant
          </p>
          <p className="fa" aria-hidden="true">
            Permis B
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;

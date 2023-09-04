import './Card.scss';

const Card = () => {
  return (
    <div className="card card0">
      <div className="border">
        <h3>Fabien Baraille</h3>
        <ul className="icons">
          <li className="fa" aria-hidden="true">
            41 ans
          </li>
          <li className="fa" aria-hidden="true">
            Pacsé, 1 enfant
          </li>
          <li className="fa" aria-hidden="true">
            Permis B
          </li>
          <li className="fa" aria-hidden="true">
            More...
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;

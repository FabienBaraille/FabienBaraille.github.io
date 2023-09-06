/* eslint-disable react/no-unescaped-entities */
import './About.scss';

const About = () => {
  return (
    <div className="about">
      <h3>Qui je suis :</h3>
      <p>
        Je me nomme Fabien Baraille, je suis en couple et père d'un enfant de 5
        ans, je réside à Saint Jean de Niost dans l'Ain. Formé initialement au
        bâtiment et plus précisément à la charpente métallique, j'ai exercé dans
        divers bureaux d'études et j'ai également eu l'opportunité d'exercer à
        mon compte.
      </p>
      <p>
        Aujourd'hui en reconversion, j'exploite mes passions et mes loisirs pour
        exercer un métier passion, développeur web !
      </p>
      <div className="cont">
        <div className="list">
          <ul>
            <li>Jeux vidéo</li>
            <li>Informatique</li>
            <li>Mangas</li>
          </ul>
          <ul>
            <li>Légos</li>
            <li>Jeux de sociétés</li>
            <li>Bricolage</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;

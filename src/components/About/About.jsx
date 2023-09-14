/* eslint-disable react/no-unescaped-entities */
import Card from '../Card/Card';
import './About.scss';

const About = () => {
  return (
    <div className="wrapper">
      <div className="first">
        <Card />
      </div>
      <div className="intro second">
        <h3>Qui je suis ?</h3>
        <p>
          Je me nomme Fabien Baraille, je suis en couple et père d'un enfant de
          5 ans, je réside à Saint Jean de Niost dans l'Ain. Formé initialement
          au bâtiment et plus précisément aux études de charpente métallique,
          j'ai exercé dans divers bureaux d'études, fabricants et j'ai également
          eu l'opportunité d'exercer à mon compte. Après 18 ans de bons et
          loyaux services dans le bâtiment, le sentiment d'avoir fait le tour du
          métier et de la question m'a frappé.
        </p>
        <p>
          Mise en place du projet reconversion, en commencant par un bilan de
          compétence très bien accompagné, prise de contact avec des personnes
          du métier, recherche d'une école et d'un financement. Tout est en
          place plus qu'à commencer la formation, quelques recherches et
          auto-formation afin d'appréhender mon futur nouveau métier :
          <strong> Développeur web !</strong>
        </p>
        <p>
          Fin de la formation, choix d'une spécialité et l'idéal pour coller au
          mieux à mes inspirations, mes passions et mes loisirs : le FrontEnd !
          En route pour la spécialisation React-Redux !
        </p>
      </div>
      <div className="skills third">
        <h3>Skills :</h3>
        <ul>
          <li>
            <img src="../../assets/images/logos/html.png" alt="html logo" />
            <p className="effect blue">HTML5/CSS3</p>
          </li>
          <li>
            <img src="../../assets/images/logos/js.png" alt="js logo" />
            <p className="effect blue">JavaScript</p>
          </li>
          <li>
            <img src="../../assets/images/logos/react.png" alt="react logo" />
            <p className="effect blue">React.js</p>
          </li>
          <li>
            <img src="../../assets/images/logos/redux.png" alt="redux logo" />
            <p className="effect blue">Redux</p>
          </li>
          <li>
            <img
              src="../../assets/images/logos/wordpress.png"
              alt="wordpress logo"
            />
            <p className="effect blue">WordPress</p>
          </li>
          <li>
            <img
              src="../../assets/images/logos/bootstrap.png"
              alt="bootstrap logo"
            />
            <p className="effect blue">Bootstrap</p>
          </li>
        </ul>
      </div>
      <div className="list fourth">
        <div>
          <h3>Soft skills :</h3>
          <ul>
            <li className="effect green">Organisé</li>
            <li className="effect green">Méthodique</li>
            <li className="effect green">Curieux</li>
            <li className="effect green">Logique</li>
            <li className="effect green">Esprit d'équipe</li>
            <li className="effect green">Communication</li>
            <li className="effect green">Adaptabilité</li>
          </ul>
        </div>
        <div className="right" />
        <div>
          <h3>Loisirs :</h3>
          <ul>
            <li className="effect green">Jeux vidéo</li>
            <li className="effect green">Informatique</li>
            <li className="effect green">Mangas</li>
            <li className="effect green">Légos</li>
            <li className="effect green">Jeux de sociétés</li>
            <li className="effect green">Bricolage</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default About;

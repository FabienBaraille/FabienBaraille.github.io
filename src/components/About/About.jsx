/* eslint-disable react/no-unescaped-entities */
import Card from '../Card/Card';
import './About.scss';

const About = () => {
  return (
    <div className="wrapper">
      <Card />
      <section className="about">
        <div className="intro">
          <h3>Qui je suis ?</h3>
          <p>
            Je me nomme Fabien Baraille, je suis en couple et père d'un enfant
            de 5 ans, je réside à Saint Jean de Niost dans l'Ain. Formé
            initialement au bâtiment et plus précisément aux études de charpente
            métallique, j'ai exercé dans divers bureaux d'études, fabricants et
            j'ai également eu l'opportunité d'exercer à mon compte. Après 18 ans
            de bons et loyaux services dans le bâtiment, le sentiment d'avoir
            fait le tour du métier et de la question m'a frappé.
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
            Fin de la formation, choix d'une spécialité et l'idéal pour coller
            au mieux à mes inspirations, mes passions et mes loisirs : le
            FrontEnd ! En route pour la spécialisation React-Redux !
          </p>
        </div>
        <div className="list">
          <ul>
            <p className="liTitle">Skills :</p>
            <li>HTML5/CSS3</li>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Redux</li>
            <li>WordPress</li>
            <li>Bootstrap</li>
          </ul>
          <ul>
            <p className="liTitle">Loisirs :</p>
            <li>Jeux vidéo</li>
            <li>Informatique</li>
            <li>Mangas</li>
            <li>Légos</li>
            <li>Jeux de sociétés</li>
            <li>Bricolage</li>
          </ul>
        </div>
      </section>
    </div>
  );
};
export default About;

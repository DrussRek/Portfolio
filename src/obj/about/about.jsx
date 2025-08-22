import Card from '../card.jsx';
import moutImage from '../../assets/mout.jpg';
import CardList from '../cardList.jsx';


const cards = [
  {
    img_src: moutImage,
    title: "TestCardTitle",
    text: "Je suis un développeur intéressé par la création de solutions logicielles innovantes. Actuellement à la recherche d'un stage dans le domaine du développement logiciel et de la cybersécurité."
  },
  {
    img_src: moutImage,
    title: "Basket",
    text: "Fervant supporter de l'équipe de basket, je suis passionné par le sport et la compétition. J'aime suivre les matchs et encourager mon équipe préférée."
  }
  ,{
    img_src: moutImage,
    title: "TestCardTitle",
    text: "Je suis un développeur intéressé par la création de solutions logicielles innovantes. Actuellement à la recherche d'un stage dans le domaine du développement logiciel et de la cybersécurité."
  },
  {
    img_src: moutImage,
    title: "Basket",
    text: "Fervant supporter de l'équipe de basket, je suis passionné par le sport et la compétition. J'aime suivre les matchs et encourager mon équipe préférée."
  }
];



function About() {
  return (
    <div className="about">
      
      <h2 id="about">À propos</h2>

      <CardList cards={cards} />
      <CardList cards={cards} />
      
    </div>
  );
}

export default About;

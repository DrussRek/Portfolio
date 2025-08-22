
import '../css/cards.css';

function Card({ img_src, title, text}) {
  return (
    <div className='card' >
      <img src={img_src} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
      <button className="btn-primary">Voir plus</button>
    </div>
  );
}


export default Card;
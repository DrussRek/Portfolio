import Card from "./card.jsx";


export default function CardList({cards}) {
    return (
        <div className="card-list">
            
            {cards.map((card, index) => (
                
                <Card
                    key={index}
                    img_src={card.img_src}
                    title={card.title}
                    text={card.text}
                />
            ))}

        </div>
    );
}


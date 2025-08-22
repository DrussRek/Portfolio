import Card from "./card.jsx";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function CardList({cards}) {
    return (
        <div className="card-list">
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="mySwiper"
            >
                {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                        <Card 
                            img_src={card.img_src} 
                            title={card.title} 
                            text={card.text} 
                        />
                    </SwiperSlide>
                ))}

            </Swiper>
      
        </div>
    );
}


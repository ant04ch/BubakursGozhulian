import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Slider.css';

function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <div className="carousel-background" style={{backgroundColor: '#cfe8f1'}}>
          <div className="carousel-caption">
            <h3>Досягайте нових висот</h3>
            <p>Наші програми розроблені для того, щоб забезпечити вас всім необхідним для успіху в галузі фінансів та бухгалтерії. Приєднуйтесь до нас!</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-background" style={{backgroundColor: '#f1e4cf'}}>
          <div className="carousel-caption">
            <h3>Інноваційне навчання</h3>
            <p>Ми впроваджуємо новітні технології та методики навчання, щоб ви могли отримати найкращі знання та навички для своєї кар'єри.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-background" style={{backgroundColor: '#e4cfeb'}}>
          <div className="carousel-caption">
            <h3>Професійний розвиток</h3>
            <p>З нами ви зможете розвинути свої професійні навички та отримати досвід, який відкриє вам двері до успішної кар'єри.</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;

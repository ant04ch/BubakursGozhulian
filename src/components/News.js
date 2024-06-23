import React from 'react';
import './News.css'; // Імпортуємо стилі для блоку новин
import news1 from './news1.jpg';
import news2 from './news2.jpg';

function News() {
  return (
    <div className="news-container">
      <div className="news-item">
        <img src={news1} alt="Новина 1" className="news-image" />
        <div className="news-content">
          <h3>Запуск інноваційної навчальної програми</h3>
          <p>
            Ми раді повідомити про запуск нової навчальної програми, яка включає інтерактивні курси та сучасні методики викладання для розвитку навичок студентів у сфері бухгалтерії.
          </p>
        </div>
      </div>
      <div className="news-item">
        <img src={news2} alt="Новина 2" className="news-image" />
        <div className="news-content">
          <h3>Відзначення найкращих випускників</h3>
          <p>
            На урочистій церемонії ми відзначили найкращих випускників, які показали видатні результати у навчанні та дослідницькій роботі.
          </p>
        </div>
      </div>
    </div>
  );
}

export default News;

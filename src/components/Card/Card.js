import React from 'react';
import { ImageProduct } from '../index';
import './styles.css';

export function Card({ data, onClick, theme }) {
  return (
      <div className={theme === 'light' ? 'card card__light' : 'card card__dark'}>
          <div className="card__photo">
            <ImageProduct data={[data.image, data.on_sale, data.discount_percentage]} />
          </div>
          <div className="card__footer">
            <p className={`card__name ${theme === 'light' ? 'title--light' : 'title--dark'}`}>{data.name}</p>
            {data.on_sale 
            ? 
              ( <div className="card__prices">
                  <p className="card__price card__price--invalid">{data.regular_price}</p>
                  <p className="card__price">{data.actual_price}</p>
                </div>)
            : <p className="card__price">{data.actual_price}</p>}
            <button className="card__btn" onClick={() => onClick(data)}>Ver detalhes</button>
          </div>
      </div>
  );
}

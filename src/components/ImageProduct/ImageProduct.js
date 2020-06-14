import React from 'react';
import noImage from '../../assets/noImage.png';
import './styles.css';

export function ImageProduct({ data }) {
    const [image, on_sale, discount_percentage] = data;
    return (
      <>
        <img className="image" src={image || noImage} alt="img"/>
        {on_sale ? <span className="image__discount">- {discount_percentage}</span> : ''}
      </>
    );
}

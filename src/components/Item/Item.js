import React from 'react';
import { ImageProduct } from '../index';
import './styles.css';

export function Item({ data, sidebar, theme, incProduct, decProduct, remProduct, handleProduct }) {
    return (
        <>
            {
                data.map(dt => {
                    return (
                        <div key={dt.code_color} className={theme === 'light' ? 'item' : 'item item__dark'}>
                            <div className="item__image">
                                <ImageProduct data={[dt.image, dt.on_sale, dt.discount_percentage]} />
                            </div>
                            <div className="item__details">
                                {sidebar === 'search'
                                    ? <>
                                        <p onClick={() => handleProduct(dt)} className={`item__name search ${theme === 'light' ? 'title--light' : 'title-dark'}`}>{dt.name}</p>
                                        <p className={`item__price ${theme === 'light' ? 'item__price--light' : 'item__price--dark'}`}>
                                            {dt.on_sale && <span className="item__price--invalid">{dt.regular_price}</span>}
                                            {dt.actual_price}
                                        </p>
                                        <p className="item__discount">{dt.installments}</p>
                                    </>
                                    : <>
                                        <div className="item__head">
                                            <p className={`product item__name ${theme === 'light' ? 'title--light' : 'title--dark'}`}>{dt.name}</p>
                                            <button className="item__close" onClick={() => remProduct(dt.code_color, dt.size)}>
                                                <i className="fas fa-times"></i>
                                            </button>
                                        </div>
                                        <p className={`item__price ${theme === 'light' ? 'item__price--light' : 'item__price--dark'}`}>
                                            {dt.on_sale && <span className="item__price--invalid">{dt.regular_price}</span>}
                                            R$ {dt.actual_price.toFixed(2)}
                                        </p>
                                        <p className="item__discount">{dt.installments}</p>
                                        <p className="item__tam">Tam: {dt.size}</p>
                                        <div className="item__btns">
                                            <button className="item__btn" onClick={() => decProduct(dt.code_color, dt.size)}><i className="fas fa-minus"></i></button>
                                            <p className="product item__qtd">{dt.qtd}</p>
                                            <button className="item__btn" onClick={() => incProduct(dt.code_color, dt.size)}><i className="fas fa-plus"></i></button>
                                        </div>
                                    </>}
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}
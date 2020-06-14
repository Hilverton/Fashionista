import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../reducers';
import { ImageProduct } from '../../components';
import { handleObj } from '../../utils';
import './styles.css';

export function Product({ theme }) {
  const dispatch = useDispatch();
  const product = useSelector(state => state.product_selected);
  const [tamSelected, setTamSelected] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    window.scrollTo(0,0);
  }, []);

  function handleClick() {
    if (!tamSelected && !tamSelected) {
      setError(true);
      return;
    }
    setError(false);

    let obj = handleObj(product, tamSelected);
    dispatch(addProduct(obj));
  }
  
  return (
    <div className="containerDetails">
      <div className="product__imagem">
        <ImageProduct data={[product.image, product.on_sale, product.discount_percentage]} />
      </div>
      <div className="product__info">
        <h3 className={`product__name ${theme === 'light' ? 'title--light' : 'title--dark'}`}>{product.name}</h3>
        <p className="product__price">
          <strong className={`product__price--selected ${theme === 'light' ? 'title--light' : 'title--dark'}`}>
            {product.regular_price}
          </strong> em até {product.installments}
        </p>
        <p className="product__size">Escolha o tamanho</p>
        {error ? <p className="product__error">É necessário escolher o tamanho</p> : ''}
        <div className="product__sizes">
          {
            product.sizes && product.sizes.map(size => {
              const productSelected = (tamSelected === size.size) ? theme === 'light' ? 'product__item--selected--light' : 'product__item--selected--dark' : null;
              const productItemStyle = theme === 'light' ? 'product__item--light' : 'product__item--dark';
              return size.available === true 
              ? <div 
                  key={size.sku} 
                  onClick={() => setTamSelected(size.size)} 
                  className={`product__item ${productItemStyle} ${productSelected}`}>{size.size}</div> 
              : ''
            })
          }
        </div>
        <button className={`product__add ${theme === 'light' ? 'product__add--light' : 'product__add--dark'}`} onClick={handleClick}>Adicionar à Sacola</button>
      </div>
    </div>
  );
}

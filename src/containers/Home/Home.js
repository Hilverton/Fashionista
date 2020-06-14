import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { product_selected } from '../../reducers';
import fetchProducts from '../../actions/fetchProducts';
import { Card, Shimmer } from '../../components';
import { handleString } from '../../utils';
import './styles.css';

export function Home({ theme }) {
  const {pending, data} = useSelector(state => state);

  const dispatch = useDispatch();
  const history = useHistory();

  function onClick(data) {
    dispatch(product_selected(data));
    const product = handleString(data);
    history.push(`/product/${product}`);
  }

  const loadProducts = useCallback(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  useEffect(() => {
    if (data.length === 0) {
      loadProducts();      
    }
  }, [data, loadProducts]);

  return (
    <>
        <div className="container">
            { pending && <Shimmer /> }
            {
              data && data.map((fash, id) => <Card key={id} data={fash} onClick={onClick} theme={theme} />)
            }
        </div>
        <div className="container">
          <p className={`${theme === 'light' ? 'title--light' : 'title--dark'}`}>{data.length} items</p>
        </div>
    </>
  );
}

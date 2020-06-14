import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Item } from '../';
import { decrement, increment, product_selected, remove, searchData, toggleSidebar } from '../../reducers';
import { handleString } from '../../utils';
import './styles.css';

export function Sidebar({ handleSidebar, sidebar, qtd, theme }) {
  const { search, dataFiltered, addedProducts, total } = useSelector(state => state);
  const dispatch = useDispatch();
  const history = useHistory();

  function incProduct(id, size) {
    dispatch(increment(id, size));
  }

  function decProduct(id, size) {
    dispatch(decrement(id, size));
  }

  function remProduct(id, size) {
    dispatch(remove(id, size));
  }

  function handleProduct(dt) {
    dispatch(toggleSidebar(''));
    dispatch(product_selected(dt));
    const product = handleString(dt);
    history.push(`/product/${product}`);
  }

  const items = sidebar === 'search' ? dataFiltered : addedProducts;
  const type = theme === 'light';
  return (
      <div className="sidebar__container">
        <div className={`sidebar ${type ? 'sidebar__light' : 'sidebar__dark'}`}>
          <div className={`sidebar__header ${type ? 'sidebar__header--light' : 'sidebar__header--dark'}`}>
            <button onClick={() => handleSidebar('')} className="sidebar__btn">
              <i className={`fas fa-arrow-left ${!type && 'white'}`}></i>
            </button>
            <p className={!type ? 'white' : ''}>
              {sidebar === 'Car' ? `Sacola (${qtd})` : 'Buscar Produtos'}
            </p>
          </div>
          {
            sidebar === 'search' && (
              <div className="sidebar__box">
                <input
                  className="sidebar__input"
                  type="search"
                  value={search}
                  onChange={(e) => dispatch(searchData(e.target.value))}
                  placeholder="Buscar por produto..."
                />
              </div>
            )}
          <div className="sidebar__content">
            {
              items.length
                ? <Item 
                    data={items} 
                    sidebar={sidebar} 
                    theme={theme}
                    incProduct={incProduct}
                    decProduct={decProduct}
                    remProduct={remProduct}
                    handleProduct={handleProduct}
                  />
                : <p className="sidebar__empty">
                    {sidebar === 'search' ? "Nenhum item encontrado :\\" : "Sua sacola está vazia :\\"}
                  </p>
            }
          </div>
          {
            sidebar === 'Car' && 
            <div className="sidebar__footer">
              <h4>Subtotal - R$ {total.toFixed(2)}</h4>
            </div>
          }
        </div>
      </div>
  );
}

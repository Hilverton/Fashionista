import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { toggleSidebar, toggleTheme } from '../reducers';
import { Navbar, Sidebar } from '../components';
import { Home, Product } from '../containers';

export function Routes() {
  const { sidebar, qtd, theme } = useSelector(state => state);
  const dispatch = useDispatch();

  function handleSidebar(type) {
    dispatch(toggleSidebar(type))
  }

  function switchTheme() {
    if (theme === 'light') {
      dispatch(toggleTheme('dark'));
    } else {
      dispatch(toggleTheme('light'));
    }
  }

  return (
    <Router>
      <Navbar 
        qtd={qtd} 
        handleSidebar={handleSidebar} 
        theme={theme} 
        switchTheme={switchTheme} 
      />
      <Switch>
        <Route path="/" exact>
          <Home theme={theme} />
        </Route>
        <Route path="/product">
          <Product theme={theme} />
        </Route>
      </Switch>
      {
        sidebar && 
        <Sidebar 
          sidebar={sidebar} 
          qtd={qtd} 
          theme={theme} 
          handleSidebar={handleSidebar}
        />
      }
    </Router>
  );
}

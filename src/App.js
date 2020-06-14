import React from 'react';
import { useSelector } from 'react-redux';
import { Routes } from './routes';
import './app.css';

export default function App() {
  const { theme } = useSelector(state => state);

  if (theme === 'light') {
    document.body.classList.add('app__light');
    document.body.classList.remove('app__dark');
  } else {
    document.body.classList.remove('app__light');
    document.body.classList.add('app__dark');
  }

  return <Routes />

}

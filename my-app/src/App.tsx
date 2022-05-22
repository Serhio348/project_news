import React from 'react';
import Header from './component/header/Header';
import NewsPosts from './component/newsPosts/NewsPosts';

import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const App: React.FC = () => {

  return (
    <div className="app-container">
      <Header />
      <div className="app-content">

        <NewsPosts />
      </div>
    </div>
  );
};

export default App;


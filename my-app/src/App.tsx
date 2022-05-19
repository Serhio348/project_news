import React from 'react';
import Header from './component/header/Header';


import './App.scss';
import NewsPost from './component/newsPost/newsPost';
import { Route } from 'react-router-dom';



const App: React.FC = () => {

  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <NewsPost />
      </div>
    </div>
  );
};

export default App;


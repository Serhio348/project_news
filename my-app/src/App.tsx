import React from 'react';
import Header from './component/header/Header';


import './App.scss';
import NewsPost from './component/newsPost/NewsPost';
import { Route } from 'react-router-dom';
import NewsPosts from './component/newsPosts/NewsPosts';



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


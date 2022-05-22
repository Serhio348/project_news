import React from 'react';
import Header from './component/header/Header';
import NewsPosts from './component/newsPosts/NewsPosts';
import Login from './component/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.scss';
import Registration from './component/registration/Registration';


const App: React.FC = () => {

  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="app-content">
          <Routes>
            <Route path="*" element={<NewsPosts />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;


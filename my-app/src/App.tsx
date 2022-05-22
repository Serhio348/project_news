import React from 'react';
import Header from './component/header/Header';
import NewsPosts from './component/newsPosts/NewsPosts';
import Login from './component/login/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import './App.scss';
import Registration from './component/registration/Registration';
import NewsPost from './component/newsPost/newsPost';



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
            <Route path="/newsPost" >
              <Route index element={<NewsPosts />} />
              <Route path=":id" element={<NewsPost />} />
            </Route>
            <Route path="*" element={<Navigate to={"/newsPosts"} />} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;


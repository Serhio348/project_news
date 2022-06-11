import React from 'react';
import Header from './component/header/Header';
import NewsPosts from './component/newsPosts/NewsPosts';
import Login from './component/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from './component/login/SignUp';
import NewsPost from './component/newsPost/newsPost';
import BlogsPost from './component/blogsPost/BlogsPost';
import BlogsPosts from './component/blogsPosts/BlogsPosts';

import './App.scss';




const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />

        <div className="app-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="newsPosts">
              <Route index element={<NewsPosts />} />
              <Route path=":id" element={<NewsPost />} />
            </Route>
            <Route path="blogsPosts">
              <Route index element={<BlogsPosts />} />
              <Route path=":id" element={<BlogsPost />} />
            </Route>
            <Route path="*" element={<NewsPosts />} />
            <Route path="*" element={<BlogsPosts />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>

  );
};

export default App;


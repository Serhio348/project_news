import React from 'react';
import Header from './component/header/Header';
import NewsPosts from './component/newsPosts/NewsPosts';
import Login from './component/login/Login';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Registration from './component/login/SignUp';
import NewsPost from './component/newsPost/newsPost';
import BlogsPost from './component/blogsPost/BlogsPost';
import BlogsPosts from './component/blogsPosts/BlogsPosts';

import './App.scss';
import { useSelector } from './component/hooks/useSelector';

const App: React.FC = () => {
  const logged = useSelector(state => state.user.logged)
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <div className="app-content">
          <Routes>
            {!logged &&
              <>
                <Route path="/login" element={<Login />} />
              </>
            }
            <Route path="/registration" element={<Registration />} />
            <Route path="newsPosts">
              <Route index element={<NewsPosts />} />
              <Route path=":id" element={<NewsPost />} />
            </Route>
            <Route path="blogsPosts">
              <Route index element={<BlogsPosts />} />
              <Route path=":id" element={<BlogsPost />} />
            </Route>
            <Route path="*" element={<Navigate to={"newsPosts"} />} />
            <Route path="*" element={<Navigate to={"blogsPosts"} />} />
          </Routes>
        </div>

      </div>
    </BrowserRouter>

  );
};

export default App;


// TODO: prettier rules
// TODO: eslint rules
// TODO: references with @
// TODO: fix security vulnerability, have conflicting dependencies for upgrade
import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Home from './screens/Home';
import { Header } from './components/Header';
import { Blog } from './screens/Blog/Blog';
import { Login } from './screens/Login';
import { ToastMessages } from './components/ToastMessages';
import { PrivateRoutes } from './components/PrivateRoutes';
import { Portfolio } from './screens/Portfolio';
import { DraftBlogs } from './screens/Blog/DraftBlogs';
import { CreateBlog } from './screens/Blog/CreateBlog';
import { EditBlog } from 'screens/Blog/EditBlog';

function App() {
  return (
    <>
      <Header/>
        <ToastMessages />
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Navigate to={'/home'} />} />
            <Route path='*' element={<Navigate to={'/home'} />} />
            <Route path="/home" Component={Home} />
            <Route path="/login" Component={Login} />
            <Route path="/portfolio" Component={Portfolio} />
            <Route path="/blog" Component={Blog} />
            <Route element={<PrivateRoutes />}>
              <Route path="/blog/draft-blogs" Component={DraftBlogs} />
              <Route path="/blog/edit-draft/:id" Component={EditBlog} />
              <Route path="/blog/create-blogs" Component={CreateBlog} />
              <Route path="/blog/edit-blog/:id" Component={EditBlog} />
            </Route>


          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

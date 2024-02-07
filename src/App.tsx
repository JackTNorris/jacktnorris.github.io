import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HashRouter, Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Home from './screens/Home';
import { Header } from './components/Header';
import { Blog } from './screens/Blog';

function App() {
  return (
    <>
      <Header/>
        <BrowserRouter basename='/'>
          <Routes>
            <Route path='/' element={<Navigate to={'/home'} />} />
            <Route path="/home" Component={Home} />
            <Route path="/blog" Component={Blog} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

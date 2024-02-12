import './App.css';
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Home from './screens/Home';
import { Header } from './components/Header';
import { Blog } from './screens/Blog';
import { Login } from './screens/Login';
import { ToastMessages } from './components/ToastMessages';
import { PrivateRoutes } from './components/PrivateRoutes';

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
            <Route path="/blog" Component={Blog} />
            <Route path="/login" Component={Login} />
            <Route element={<PrivateRoutes />}>
              {/*<Route path="home"  />*/}
            </Route>


          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;

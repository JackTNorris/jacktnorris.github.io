import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import { Loader } from './Loader';
export const PrivateRoutes = () => {
  const user = useAuth();
  return typeof user === 'undefined' ? (
    <Loader />
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to='/login' />
  );
}
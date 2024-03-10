import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
export const PrivateRoutes = () => {
  const user = useAuth();
  return typeof user === 'undefined' ? (
    <h1>Loading.....</h1>
  ) : user ? (
    <Outlet />
  ) : (
    <Navigate to='/login' />
  );
}
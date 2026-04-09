import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import { Loader } from './Loader';
export const PrivateRoutes = () => {
  const user = useAuth();
  if (typeof user === 'undefined') {
    return <Loader />
  }
  else if (user === null) {
    return <Navigate to='/login' />
  }
  else {
    return <Outlet />
  }

}
import { Navigate, Outlet } from 'react-router-dom'
import { auth as fbauth } from '../loaders/firebase'
export const PrivateRoutes = () => {
  let auth = {token: !!fbauth.currentUser}
return (
    auth.token ? <Outlet/> : <Navigate to='/login'/>
  )
}
import { FC } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectIsLogged, selectHasRole } from '@/store/features/auth/selectors';
import { useAppSelector } from '../hooks/useStore';
import routes from './routes';

interface Props{
    children:any;
    redirectTo?:string;
    hasRole?:string
}

const PrivateRouter:FC<Props> = ({redirectTo=routes.login,children,hasRole:role}) => {
  const location = useLocation();
  const isLogged = useSelector(selectIsLogged);
  const hasRole = useAppSelector(state=>selectHasRole(state,role));
  if (!isLogged)   return <Navigate to={redirectTo} state={{
    from: location.pathname,
  }} replace/>
  if (role && !hasRole)   return <Navigate to={redirectTo} replace/>
  return <>{children}</>;
};

export default PrivateRouter;

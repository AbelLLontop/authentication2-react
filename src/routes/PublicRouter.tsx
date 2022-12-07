import {selectIsLogged } from '@/store/features/auth';
import { FC } from 'react';
import { useSelector } from 'react-redux';
import {Navigate} from 'react-router-dom';
import routes from './routes';

interface Props {
    children:any;
    redirectTo?:string;
}

const PublicRouter:FC<Props> = ({children,redirectTo=routes.projects}) => {
    const isLogged = useSelector(selectIsLogged);
    if(isLogged) return <Navigate to={redirectTo} replace />
  return (
    <>{children}</>
  )
}

export default PublicRouter
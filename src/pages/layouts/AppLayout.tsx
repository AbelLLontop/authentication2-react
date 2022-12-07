import { Navigation } from '@/components';
import {Outlet}from 'react-router-dom';

const AppLayout = () => {
  return (
    <div>
      <Navigation/>
        <Outlet/>
        <footer>Footer</footer>
    </div>
  )
}

export default AppLayout
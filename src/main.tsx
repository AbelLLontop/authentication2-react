import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {RouterProvider} from 'react-router-dom';
import router from '@/routes/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>
)
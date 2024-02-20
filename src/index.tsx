import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reset-css';
import './styles/index.scss';
import Home from './pages/Home/index.tsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Schedule from './pages/Schedule/index.tsx';
import About from './pages/About/index.tsx';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/schedule',
        element: <Schedule />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(<RouterProvider router={routes} />);

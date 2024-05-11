import React from 'react';
import ReactDOM from 'react-dom/client';
import 'reset-css';
import './styles/index.scss';
import Home from './pages/Home/index.tsx';
import Admin from './pages/Admin/index.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Schedule from './pages/Schedule/index.tsx';
import About from './pages/About/index.tsx';
import Coaches from './pages/Coaches/index.tsx';
import MainPages from './pages/MainPages/index.tsx';
import Reviews from './pages/Reviews/index.tsx';
import Academy from './pages/Academy/index.tsx';
import Sections from './pages/Sections/index.tsx';
import Price from './pages/Price/index.tsx';
import MyLoginPage from './pages/Admin/MyLoginPage.tsx';
import { Provider } from 'react-redux';
import { store } from './redux/store.ts';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainPages />,
        children: [
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
            {
                path: '/coaches',
                element: <Coaches />,
            },
            {
                path: '/reviews',
                element: <Reviews />,
            },
            {
                path: '/academy',
                element: <Academy />,
            },
            {
                path: '/sections',
                element: <Sections />,
            },
            {
                path: '/price',
                element: <Price />,
            },
        ],
    },
    {
        path: '/login',
        element: <MyLoginPage />,
    },
    {
        path: '/admin/*',
        element: <Admin />,
    },
]);

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);

document.getElementById('root');

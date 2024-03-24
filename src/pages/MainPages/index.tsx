import { Outlet } from 'react-router-dom';
import Header from '../../includes/Header/index.tsx';
import Footer from '../../includes/Footer/index.tsx';
import React from 'react';

const MainPages = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default MainPages;

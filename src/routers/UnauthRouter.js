import React from 'react'
import { Route, Routes } from 'react-router';
import NotFound from '../pages/NotFound';
import Auth from '../pages/public/Auth';
import Home from '../pages/public/Home';

const UnauthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Auth/>}/>
            <Route path="/home" element={<Home/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
}

export default UnauthRouter;

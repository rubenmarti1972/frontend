import React from 'react';
import { Route, Routes } from 'react-router';
import Catalogue from '../components/Catalogue';
import Product from '../components/Product';
import NotFound from '../pages/NotFound';
import Dashboard from "../pages/private/Dashboard";

const AuthRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>}>
                <Route index element={<Product/>}/>
                <Route path="catalogue" element={<Catalogue/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    )
}

export default AuthRouter

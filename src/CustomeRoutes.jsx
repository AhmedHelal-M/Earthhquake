import Home from './Home';
import Details from './Details';
import { Route, Routes } from 'react-router';
 import React from 'react'
 const CustomeRoutes = () => (
    <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/Details/:eventId" element={<Details/>} />

    </Routes>
)


export default CustomeRoutes;
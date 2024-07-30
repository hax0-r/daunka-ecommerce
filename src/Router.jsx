import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Carts from './Pages/Carts'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/carts' element={<Carts />} />
        </Routes>
    )
}

export default Router
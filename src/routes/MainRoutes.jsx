import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import MovieDetails from '../pages/MovieDetails';
import Error from '../pages/Error';

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/movie/:name' element={<MovieDetails />} />
        <Route path='*' element={<Error />} />
    </Routes>
  )
}

export default MainRoutes;
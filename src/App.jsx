
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Details from './components/Details';
import SideMenu from './components/SideMenu';
import Register from './components/Register';
import Layout from './Layout';

const App = () => {

  const getUserArr = localStorage.getItem('user_login');
  return (
    <>
      <main className="App">
        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/details' element={
            <Layout component={<Details />} />
          } />
        </Routes>
      </main>
    </>
  )
}

export default App;
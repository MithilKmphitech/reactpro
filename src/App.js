import React,{ useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Counter from './Projects/Counter';
import Home from './Home';
import Onchange from './Onchange';
import Crud from './Projects/Crud/Crud';
import Ecommerce from './Ecommerce/Ecommerce';
import InputFile from './InputFile/InputFile';
import SelectMenu from './Components/SelectMenu';
import Register from './Task/Register';
import Login from './Task/Login';
import Dashboard from './Task/Dashboard';
import Post from './Components/Post';
import Profile from './Components/Profile';
import PrivateRouter from './PrivateRouter/PrivateRouter';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact  path="/" element={<Home />}  />
          <Route exact  path="/counter" element={<Counter />} />
          <Route exact  path="/select" element={<SelectMenu />} />
          <Route exact  path="/crud" element={<Crud />} />
          <Route exact  path="/onchange" element={<Onchange />} />
          <Route exact  path="/ecommerce" element={<Ecommerce />} />
          <Route exact  path="/input" element={<InputFile />} />
          <Route exact  path="/register" element={<Register />} />

          <Route element={<PrivateRouter />}>
          <Route exact  path="/dashboard" element={ <Dashboard />} />
          </Route>

          <Route exact  path="/login" element={<Login />} />
          <Route exact  path="/post" element={<Post />} />
          <Route exact  path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;
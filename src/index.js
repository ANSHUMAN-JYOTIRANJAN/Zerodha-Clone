import React from 'react';
import ReactDOM from 'react-dom/client';
import{ BrowserRouter, Routes, Route} from "react-router-dom";
import './index.css';
import HomePage from './landing_page/home/HomePage';
import Signup from './landing_page/signup/Signup';
import AboutPage from './landing_page/about/AboutPage';
import ProductsPage from './landing_page/products/ProductsPage';
import PricePage from './landing_page/pricing/PricePage';
import SupportPage from './landing_page/support/SupportPage';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/Footer';
import NotFound from './landing_page/NotFound';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/about" element={<AboutPage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/pricing" element={<PricePage/>}/>
      <Route path="/support" element={<SupportPage/>}/>
      <Route  path='/*'element={<NotFound/>}></Route>
    </Routes>
    <Footer/>
  </BrowserRouter>
);


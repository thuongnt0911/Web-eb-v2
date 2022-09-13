import React, { createContext, useState } from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Header from './header/index';
import Footer from './footer/index';
import Home from './../../pages/home/index';
import About from './../../pages/about-us/index';
import LifeAtNtq from './../../pages/life-at-ntq/index';
import Jobs from './../../pages/jobs/index';
import Insights from './../../pages/insights/index';
import Contact from './../../pages/contact/index';
const Layout = () => {
  return (
    <>
      <Header />
      <div className='main base-container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="insights" element={<Insights />} />
          <Route path="life-at-ntq" element={<LifeAtNtq />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}
export default Layout;

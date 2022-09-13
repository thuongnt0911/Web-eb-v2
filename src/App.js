import './assets/scss/index.scss';
import '../src/index.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Layout from './components/layout';
function App() {
  return (
    <div className="App">
      <Layout />
    </div>
  );
}


export default App;

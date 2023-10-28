import React from 'react';
import ReactDOM from 'react-dom/client';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import Container from 'react-bootstrap/Container';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Footer from './Component/Footer';
import Navbar from './Component/Navbar';
import {
  BrowserRouter, Routes, Route, Link
} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Container   gap={3}>
    <BrowserRouter>
      <Navbar />
        <App />
      <Footer />
    </BrowserRouter>
  </Container>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

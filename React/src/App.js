import React, { Component }  from 'react';
import {
    BrowserRouter, Routes, Route, Link
  } from "react-router-dom";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

import List from './Pages/CompanyUsers/list';
import Show from './Pages/CompanyUsers/show';
import Update from './Pages/CompanyUsers/update';
import Create from './Pages/CompanyUsers/create';

import { useParams, useHistory, useNavigate } from 'react-router-dom';
  
  function App() {
    return (
      <><>
        <Routes>
          <Route path="employees" element={
            
              < List/>
            } />

          <Route path="/employee/:id" element={<Show />} />
          <Route path="/employee/edit/:id" element={<Update />} />
          <Route path="/employee/create" element={<Create />} />

        </Routes>          
      </>
      <div>
        
      </div></>
    );
  }

export default App;

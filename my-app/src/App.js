import React from 'react';
import './App.css';

import Sidemenu from './Components/Sidemenu';

import {Routes,Route,BrowserRouter} from 'react-router-dom';

import Home from './Components/Home';
import Faculty from './Components/Faculty';
import ApprovedCurriculum from './Components/Approved';
import RequirementForm from './Components/Reqform';




function App() {
  return (
  <>
      <BrowserRouter>
        <Routes>
          <Route path ="/" exact element={<Home />}></Route>
          <Route path ="/reqform" exact element={<RequirementForm />}></Route>
          <Route path ="/faculty" exact element={<Faculty />}></Route>
          <Route path ="/approved" exact element={<ApprovedCurriculum />}></Route>
        </Routes>
      </BrowserRouter>

  </>
  );
}

export default App;

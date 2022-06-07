import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/HomePage';
import { useState } from 'react';
import Showdatabyuser from './components/Showdatabyuser';
function App() {
  const [storeuserDetails, setstoreuserDetails] = useState('');
  
  return (
    <>
      <Router>






       

          <Routes >



            <Route exact path="/" element={<HomePage setstoreuserDetails={setstoreuserDetails} />} />
            <Route exact path="/:user" element={<Showdatabyuser storeuserDetails={storeuserDetails} />} />


          </Routes >
  


      </Router>
    </>
  );
}

export default App;

import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Menu from './components/NavBar/Menu';
import Register from './components/Register/Register';
import Searchfields from './components/SearchBox/Searchfields';
function App() {
  return (
    <>
     <Router>
        <Routes>
          <Route exact path="/" element={<Searchfields/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;

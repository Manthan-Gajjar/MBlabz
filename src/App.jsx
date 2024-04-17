import React from 'react'
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';

import { Route,Routes,Navigate } from 'react-router-dom';


function App() {
    return ( <>
     <Navbar/>
        <Routes>
        
  <Route exact path='/' element={<Home/>}/>
  <Route exact path='/About' element={<About/>}/>
  <Route exact path='/Service' element={<Service/>}/>
  <Route exact path='/Contact' element={<Contact/>}/>
  <Route path="*" element={<Navigate to="/" />} />

        </Routes>


    </> );
}

export default App;
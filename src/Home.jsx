import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './Project1.css'; 
import homeimg from "./Images/Home.jpg"
import { NavLink } from 'react-router-dom';
import Common from './Common';
import Footer from './Footer';



function Home() {
    return ( <>
         <Common 
         name="Grow Your Business With"
         visit="/Service"
         btname="Get Started"
         img={homeimg}
         />
        <Footer/>
    </> );
}

export default Home;
import React from 'react'
import Common from './Common';
import Aboutimg from "./Images/Home 2.jpg"
import Footer from './Footer';


function About() {
    return ( <>
        <Common 
         name="Welcome To About Page"
         visit="/Service"
         btname="About"
         img={Aboutimg}
         />
         <Footer/>
    </> );
}

export default About;
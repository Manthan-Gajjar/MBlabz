import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import './Project1.css'; 
import homeimg from "./Images/Home.jpg"
import { NavLink } from 'react-router-dom';



function Common(props) {
    return ( <>
         <section id="header" className='d-flex align-items-center'>
 <div className='container-fluid '>
    <div className='row'>
        <div className='col-10 ms-auto'>
        <div className='row'>
            <div className='col-md-5 pt-6 pt-lg-0 order-2 order-lg-2 d-flex justify-content-center flex-column'>
                <h1 className='Header-h1'>{props.name} <strong className='brand_name'><br/>MB LABZ</strong>
                </h1>

                <h5 className='my-3'>
                We Are The Team of Telented Devloper Making Website
                </h5>

 <div className='mt-3'>
    <NavLink to={props.visit} className="button-35">{props.btname}</NavLink>
              </div>
            </div>
            <div className='col-lg-6 order-1 order-lg-2 header-img'>
                <img src={props.img}  id="home-img" className='img-fluid animated' alt='home img'/>
            </div>
            </div>
        </div>
    </div>
 </div>
         </section>
    </> );
}

export default Common;
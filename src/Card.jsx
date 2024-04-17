import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import homeimg from "./Images/Home.jpg";
import { NavLink } from 'react-router-dom';

function Card(props) {
    return (
        <>
            
                    

                    <div className='col-md-4 col-10 mx-auto'>
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                            <div className="card-body">
                                <h5 className="card-title font-weight-bold">{props.title}</h5>
                                <p className="card-text">{props.Content}.</p>
                                <NavLink to="/Contact" className="button-35">Apply</NavLink>
                            </div>
                        </div>
                    </div>

        </>
    );
}

export default Card;

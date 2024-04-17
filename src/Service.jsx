import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import Card from './Card';
import Sdata from './Cdata';
import Footer from './Footer';

function Service() {
    return (
        <>
            <div className='my-5' id="H" >
                <h1 className='text-center'>Our Services</h1>
            </div>
            <div className='container'>
                <div className='row align  d-flex justify-content-center align-items-center'>
                    {Sdata.map((val, ind) => (
                        <div key={ind} className='col-md-4 mt-4'>
                            <Card
                                imgsrc={val.imgsrc}
                                title={val.title}
                                Content={val.Content}
                            />
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Service;

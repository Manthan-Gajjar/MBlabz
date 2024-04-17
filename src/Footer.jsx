import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { SocialIcon } from 'react-social-icons';

function Footer() {
    return (
        <>
            <footer className="bg-dark text-light text-center py-3 mt-5">
                <p className="mb-3">
                    © This Website Is Created By Manthan Gajjar
                </p>
                {/* Instagram Icon */}
                <SocialIcon url="https://www.instagram.com/mblabz.in/" />  
            </footer>
        </>
    );
}

export default Footer;

import React from "react";
import { NavLink } from "react-router-dom";
import * as Icon from 'react-bootstrap-icons';

function Footer(){
    return(
        <>
            <footer className="footer">
                <p className="footer__title">Add Me</p>
                <div className="footer__social">
                    <NavLink to="https://www.linkedin.com/in/bhavik-jain-a96145a7/" className="footer__icon"><Icon.Linkedin /></NavLink>
                    <NavLink to="https://github.com/Bhavik-Jain" className="footer__icon"><Icon.Github /></NavLink>
                    <NavLink to="https://www.instagram.com/bhavik_jainn_/" className="footer__icon"><Icon.Instagram /></NavLink>
                </div>
                <p>&#169; 2020 copyright all right reserved</p>
        </footer>
        </>
    );
};

export default Footer;
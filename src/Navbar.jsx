// eslint-disable-next-line
import React from 'react';

function Navbar(){
    return(
        <>
            <header className="l-header"> 
                <div className="navi bd-grid">
                    <div>
                        <a href="/" className="navi__logo txt" style={{ textDecoration: 'none' }}>Portfolio</a>
                    </div>

                    <div className="navi__menu" id="navi-menu">
                        <ul className="navi__list">
                            <li className="navi__item">
                                <a href="#home" className="navi__link menu txt" style={{ textDecoration: 'none' }}>Home</a>
                            </li>
                            <li className="navi__item">
                                <a href="#about" className="navi__link txt" style={{ textDecoration: 'none' }}>About</a>
                            </li>
                            <li className="navi__item">
                                <a href="#skills" className="navi__link txt" style={{ textDecoration: 'none' }}>Skills</a>
                            </li>
                            <li className="navi__item">
                                <a href="#work" className="navi__link txt" style={{ textDecoration: 'none' }}>Work</a>
                            </li>
                            <li className="navi__item">
                                <a href="https://drive.google.com/file/d/17jJWsJmg-_Yg5Jsearbrrok6DUp2v5Wn/view?usp=sharing" target="_blank" rel="noreferrer" className="navi__link txt" style={{ textDecoration: 'none' }}>Resume</a>
                            </li>
                        </ul>
                    </div>
                    <div className="nav__toggle" id="nav-toggle">
                        <i className='bx bx-menu'></i>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
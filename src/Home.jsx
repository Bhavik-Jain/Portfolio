//eslint-disable-next-line
import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import img from "../src/img/aboutme.svg";
import About from './About';
import Skills from './Skills';
import Work from "./Work";
import Footer from './Footer';
import BubbleBackground from './BubbleBackground';
function Home(){
    return(
        <>
            <main className="l-main">
                <section className="home bd-grid" id="home">
                    <div className="home__data">
                        <h1 className="home__title">Hi,<br />I'am <span className="home__title-color">Bhavik</span><br /> A Web Developer</h1>
                        <a href="https://www.linkedin.com/in/bhavik-jain-a96145a7/" target="_blank" className="button" style={{ textDecoration: 'none' }}>Hire Me</a>
                    </div>
                    
                    <div className="home__social">
                        <a href='https://www.linkedin.com/in/bhavik-jain-a96145a7/' target="_blank" className="home__social-icon"><Icon.Linkedin /></a>
                        <a href="https://github.com/Bhavik-Jain" target="_blank" className="home__social-icon"><Icon.Github /></a>
                    </div>

                    <div className="home__img">    
                        <img src={img} alt="" />
                    </div>
                </section>

                <About />
                
                <Skills />
                
                <Work />
                
                {/* <Contact /> */}
                
                <Footer />
            </main>
        </>
    );
};

export default Home;
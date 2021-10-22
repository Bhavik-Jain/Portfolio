import React from "react";
import about from "../src/img/myblue.png";
function About(){
    return(
        <>
            <section className="about section" id="about">
                <h2 className="section-title">About</h2>
                <div className="about__container bd-grid">
                    <div className="about__img">
                        <img src={about} alt="" />
                    </div>
                    <div>
                        <h2 className="about__subtitle"> Hii, I'am Bhavik Jain</h2>
                        <p className="about__text">
                        👀 Skilled in Python, Django, React, and Programming in C++.<br />
                        🎓 Currently Pursuing MCA from SPPU, Pune.<br />
                        💻 I’m looking for Internship as a Full Stack Developer.<br />
                        ✏️ I also write blog on Blogging for Geeks.<br />
                        🎯 I am open for collaborations in Machine Learning and Data Science domains.   
                        </p>           
                    </div>                                   
                </div>
                <br />
                <br />
            </section>
        </>
    );
};

export default About;
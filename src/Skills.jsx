import React from "react";
import work3 from "../src/img/skills.svg";

function Skills(){
    return(
        <>
            <section className="skills section" id="skills">
                <h2 className="section-title">Skills</h2>

                <div className="skills__container bd-grid">          
                    <div>
                        <h2 className="skills__subtitle">Profesional Skills</h2>
                        <p className="skills__text">A computer science student and a self-taught developer learning new tools and technologies to solve real-world problems. Following are my technical skills:- </p>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-html5 skills__icon'></i>
                                <span className="skills__name">Django</span>
                            </div>
                            <div className="skills__bar skills__html">

                            </div>
                            <div>
                                <span className="skills__percentage">65%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-css3 skills__icon' />
                                <span className="skills__name">C++</span>
                            </div>
                            <div className="skills__bar skills__css">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">60%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxl-javascript skills__icon' ></i>
                                <span className="skills__name">Python</span>
                            </div>
                            <div className="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">50%</span>
                            </div>
                        </div>
                        <div className="skills__data">
                            <div className="skills__names">
                                <i className='bx bxs-paint skills__icon'></i>
                                <span className="skills__name">HTML-CSS</span>
                            </div>
                            <div className="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span className="skills__percentage">60%</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>              
                        <img src={work3} alt="" className="skills__img" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
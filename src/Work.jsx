import React  from "react";
import Card from "./Card";
import Sdata from "./Sdata";

const Work =() =>{
    return(
      <>
        <section className="work section" id="work">
          <h2 className="section-title">Projects</h2>
          <div className="work__container">
            <div className="container">
              <div className="row">                  
                {Sdata.map((val, ind) => {
                    return(
                      <Card key={ind} imgsrc={val.imgsrc} title={val.title} href={val.href}/>
                    )})}
              </div>
            </div>
          </div>
        </section>     
      </>
    );
  };
  
  export default Work;
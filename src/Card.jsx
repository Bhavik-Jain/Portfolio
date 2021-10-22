//eslint-disable-next-line
import React from "react";
function Card(props){
    return(
        <>
            <div className="col-sm">
                <div className="card">
                    <img src={props.imgsrc} className="card-img-top"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.desc}</p>
                        <a href={props.href} className="btn btn-primary">View Project</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;
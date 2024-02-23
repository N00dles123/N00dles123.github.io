import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

// try to get this to be capitalized
function CardLeft({img, title, description, link}){
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-6">
                    <img src={img} alt="shows project" className="cardLeftImg"/>
                </div>
                <div className='col-sm-6 leftpDiv'>
                    <a className="projTitle" href={link} target="_blank" rel="noreferrer">{title}</a>
                    <p className='projectLeftp'>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default CardLeft;
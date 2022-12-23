import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function CardRight({img, title, description, link}){
    
        return (
            <div className="container">
                <div className="row">
                    <div className='col-sm-6 rightpDiv'>
                        <a className="projTitle" href={link} target="_blank" rel="noreferrer">{title}</a>
                        <p className='projectRightp'>{description}</p>
                    </div>
                    <div className="col-sm-6">
                        <img src={img} alt="shows project" className="cardRightImg"/>
                    </div>
                </div>
            </div>
        );
    }

export default CardRight;
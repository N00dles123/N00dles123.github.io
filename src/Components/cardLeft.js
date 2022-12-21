import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function CardLeft({img, title, description, link}){
    return (
        <div className="container">
            <div className="row">
                <div class="col-sm-6">
                    <img src={img} alt="image/gif showing project" className="cardLeftImg"/>
                </div>
                <div className='col-sm-6 leftpDiv'>
                    <a className="projTitle" href={link}>{title}</a>
                    <p className='projectLeftp'>{description}</p>
                </div>
            </div>
        </div>
    );
}

export default CardLeft;
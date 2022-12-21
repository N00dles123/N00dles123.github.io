import React from "react";

function CardLeft({img, title, description, link}){
    return (
        <div className="cardLeft">
            <img src={img} alt="image/gif showing project" className="cardLeftImg"/>
            <div className='leftpDiv'>
                <a className="projTitle" href={link}>{title}</a>
                <p className='projectLeftp'>{description}</p>
            </div>
        </div>
    );
}

export default CardLeft;
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import data from './data.json';

function Contact(){
    return (
        <div className="contactDiv">
            <div className="container">
                <div className="row container-contact">
                    <div className="col-sm">
                        <div className='infoContainer'>
                            <h1 className="contactTitle">Email</h1>
                            <div className="contactText">
                                <a className="email" href={`mailto:${data.email}`} target='_blank' rel="noreferrer">
                                    {data.email}
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='infoContainer'>
                            <h1 className="contactTitle">Phone</h1>
                                <div className="contactText">
                                {data.phone}
                                </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='infoContainer'>
                            <h1 className="contactTitle">LinkedIn</h1>
                            <a href={`${data.linkedin}`} target='_blank' rel="noreferrer">
                                <img src="LI-In-Bug.png" alt="Linkedin Logo" className="contactLogo"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='infoContainer'>
                            <h1 className="contactTitle">GitHub</h1>
                            <a href={`${data.github}`} target='_blank' rel="noreferrer">
                                <img src="github-mark.png" alt="GitHub Logo" className='contactLogo'/>
                            </a>
                        </div>
                    </div>
                </div>
            </div> 
        </div>  
    )
}

export default Contact;
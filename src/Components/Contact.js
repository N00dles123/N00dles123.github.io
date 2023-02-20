import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Contact(){
    return (
        <div className="contactDiv">
            <div className="container">
                <div className="row container-contact">
                    <div className="col-sm">
                        <div className='infoContainer'>
                            <h1 className="contactTitle">Email</h1>
                            <div className="contactText">
                                <a className="email" href="mailto:jasonlinfl@hotmail.com" target='_blank' rel="noreferrer">
                                    jasonlin@knights.ucf.edu
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='infoContainer'>
                            <h1 className="contactTitle">Phone</h1>
                                <div className="contactText">
                                (321)-236-0756
                                </div>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='infoContainer'>
                            <h1 className="contactTitle">LinkedIn</h1>
                            <a href="https://www.linkedin.com/in/jason-lin5/" target='_blank' rel="noreferrer">
                                <img src="LI-In-Bug.png" alt="Linkedin Logo" className="contactLogo"/>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm">
                        <div className='infoContainer'>
                            <h1 className="contactTitle">GitHub</h1>
                            <a href="https://github.com/N00dles123" target='_blank' rel="noreferrer">
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
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

function Contact(){
    return (
        <div className="contactDiv">
            <div className="container">
                <div className="row container-contact">
                    <div className="col-sm">
                        <h1>Email</h1>
                        <a href="mailto:jasonlinfl@hotmail.com" target='_blank' rel="noreferrer">
                            jasonlinfl@hotmail.com
                        </a>
                    </div>
                    <div className="col-sm">
                        <h1>Phone</h1>
                        <div className="phoneNum">
                        (321)-236-0756
                        </div>
                    </div>
                    <div className="col-sm">
                        <h1>LinkedIn</h1>
                        <a href="https://www.linkedin.com/in/jason-lin5/" target='_blank' rel="noreferrer">
                            <img src="LI-In-Bug.png" alt="Linkedin Logo" className="contactLogo"/>
                        </a>
                    </div>
                    <div className="col-sm">
                        <h1>GitHub</h1>
                        <a href="https://github.com/N00dles123" target='_blank' rel="noreferrer">
                            <img src="github-mark.png" alt="GitHub Logo" className='contactLogo'/>
                        </a>
                    </div>
                </div>
            </div> 
        </div>  
    )
}

export default Contact;
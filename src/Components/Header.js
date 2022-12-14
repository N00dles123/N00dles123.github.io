import React from 'react';
import './Header.css';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

function Header(){
    return(
        <BrowserRouter>
                <div className='Header'>
                    <Link to='#about' className='AboutLink'>
                        About
                    </Link>
                    <Link to='#projects' className='ProjectsLink'>
                        Projects
                    </Link>
                    <Link to='#contact' className='ContactLink'>
                        Contact
                    </Link>
                </div>
        </BrowserRouter>
    );
}

export default Header;
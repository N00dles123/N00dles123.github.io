import './App.css';
import "@fontsource/roboto-slab"
import "@fontsource/roboto-mono"
import "@fontsource/roboto"
import React, { useRef, useState, useEffect } from 'react';
import CardLeft from './Components/CardLeft';
import CardRight from './Components/CardRight';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';


// functions to handle scrolling and dimensions of the screen
const getDimensions = ele => {
  const { height } = ele.getBoundingClientRect();
  const offsetTop = ele.offsetTop;
  const offsetBottom = offsetTop + height;
  return {
    height,
    offsetTop,
    offsetBottom
  };
};

const scrollTo = ele => {
  ele.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
};

function App() {
  const [visibleSection, setVisibleSection] = useState();

  const headerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = [
    { section: 'Home', ref: homeRef },
    { section: 'About', ref: aboutRef },
    { section: 'Projects', ref: projectsRef },
    { section: 'Contact', ref: contactRef }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const { height: headerHeight } = getDimensions(headerRef.current);
      const scrollPosition = window.scrollY + headerHeight;

      const selected = sectionRefs.find(({ section, ref }) => {
        const ele = ref.current;
        if (ele) {
          const { offsetBottom, offsetTop } = getDimensions(ele);
          return scrollPosition > offsetTop && scrollPosition < offsetBottom;
        }
      });
      
      if (selected && selected.section !== visibleSection) {
        setVisibleSection(selected.section);
      } else if (!selected && visibleSection) {
        setVisibleSection(undefined);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [visibleSection]);
  const onButtonClick = () => {
    fetch('jasonlin.pdf').then(response => {
      response.blob().then(blob => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement('a');
        a.href = url;
        a.download = 'jasonlin.pdf';
        a.click();
      });
    })
  }
  return (
    <div className='App'>
      <div className="content">
        {/*<div className="sticky">*/}
          <nav className="navbar navbar-expand-sm sticky-top" ref={headerRef}>
            <div className="container-fluid">
              <button className="navbar-toggler navbar-toggler-left" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-center" id="navbarNav">  
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <button type="button" 
                    className={`header_link ${visibleSection === "About" ? "selected" : ""} nav-button`}
                    onClick={() => {
                      scrollTo(aboutRef.current);
                    }}
                    >
                      About
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" 
                    className={`header_link ${visibleSection === "Projects" ? "selected" : ""}`}
                    onClick={() => {
                      scrollTo(projectsRef.current);
                    }}
                    >
                      Projects
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" 
                    className={`header_link ${visibleSection === "Contact" ? "selected" : ""}`}
                    onClick={() => {
                      scrollTo(contactRef.current);
                    }}
                    >
                      Contact
                    </button>
                  </li>
                  <li className="nav-item">
                    <button type="button" className='resumeButton' onClick={onButtonClick}>
                      Resume
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        {/*</div>*/}
        <div className="section" id="Home" ref={ homeRef }>
            <div className='homeBox'>   
                  <div className="homePBox">
                    <div className='nameContainer'>
                      <p className='name'>
                      &#128075; Hi, I’m Jason
                      </p>
                    </div>
                    <p className='homeP'>
                    I am a software engineer and a student.
                    Scroll down to learn more about me and my projects :)
                    </p>
                  </div>
            </div>   
        </div>
        <div className="section" id="About" ref={ aboutRef }>
            <div className={`aboutCardDiv`}>
              <div className={`fill ${/*visibleSection === "About" ? "fadeinP" : "hidden"*/""}`}>
                <div className='aboutImgDiv'>
                  {<img src='program.png' alt='program' className={`aboutImg`}/> }
                </div>
                <div className='aboutContent'>
                  <h1 className={`aboutHeader`}>About Me</h1>
                  <p className={`aboutP`}>
                  Hello! My name is Jason Lin and I enjoy creating software as well as learning new ideas. 
                  I am currently a student at the University of Central Florida and from there, I learned a lot about full stack software development and computer science.
                  My current focuses right now are on learning more about web development as well as other software development topics.
                  I am experienced in creating MERN stack projects as well as LAMP stack projects. 
                  I am also experienced with Git, MySQL, and Visual Studio Code, I hope to make more use of these as I progress on with my career. 
                  I can also speak and comprehend limited Mandarin Chinese. 
                  Other than programming, I enjoy watching basketball and TV in my free time.
                  </p>
                </div>
              </div>
              
              
            </div>
        </div> 
        <div className="section" id="Projects" ref={ projectsRef }>
            <h2 className={`projectsHeader`}>Here are some of the projects I've worked on</h2>
            <div className={`projectsCardDiv`}>
              {<CardLeft img='recipefy.gif' 
              description='This web application is meant to share recipes and favorite recipes created by others on the platform. This was created using the MERN stack and deployed through Heroku. I served as the project manager as well as helped the API team for this project' 
              title="Recipefy" 
              link="https://github.com/N00dles123/Recipefy"/>}
              {<CardRight img='game.gif' 
              description='Implemented a multiplayer version of the popular word game Wordle along with two other people. I created the API endpoints of this project for login and registration. This project was created with the MERN stack and deployed through Heroku. I also made use of socket.io to help create rooms for two way communication between two users.' 
              title="Muldle" 
              link="https://github.com/N00dles123/multi-wordle"/>}
              {<CardLeft img='ContactHub.png'
              description='This is a web application that allows users to create and share contact information with other users. This was created using the LAMP stack and deployed through Heroku. I served as the project manager as well as helped the API team for this project'
              title="ContactHub"
              link="https://github.com/N00dles123/COP4331-Small-project-group8"
              />}
            </div>
        </div>
        <div className="section" id="Contact" ref={contactRef}>
            <h3 className={`contactHeader`}>Contact Information</h3>
            <Contact/> 
        </div>
        <div className='copyrightText'>&copy; 2022 by Jason Lin</div>
      </div>
    </div>
  );
}

export default App;

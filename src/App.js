import './App.css';
import "@fontsource/roboto-slab"
import "@fontsource/roboto-mono"
import "@fontsource/roboto"
import React, { useRef, useState, useEffect } from 'react';
import CardLeft from './Components/CardLeft';
import CardRight from './Components/CardRight';
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './Components/Contact';
import data from './Components/data.json';

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
                      &#128075; Hi, I’m {data.name}
                      </p>
                    </div>
                    <p className='homeP'>
                    {data.home}
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
                    {data.about}
                  </p>
                </div>
              </div>
              
              
            </div>
        </div> 
        <div className="section" id="Projects" ref={ projectsRef }>
            <h2 className={`projectsHeader`}>Here are some of the projects I've worked on</h2>
            <div className={`projectsCardDiv`}>
              {data.projects.map((project, index) => {
                return (index % 2 === 0) ? <CardLeft img={project.img} description={project.description} title={project.name} link={project.link}/> : <CardRight img={project.img} description={project.description} title={project.name} link={project.link}/>
              })
              }
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

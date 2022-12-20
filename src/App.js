import './App.css';
import "@fontsource/roboto-slab"
import "@fontsource/roboto-mono"
import "@fontsource/roboto"
import React, { useRef, useState, useEffect } from 'react';

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
      console.log(visibleSection)
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
      <div className="top-spacer" />
      <div className="content">
        <div className="sticky">
          <div className="header" ref={headerRef}>
            <button type="button" 
            className={`header_link ${visibleSection === "About" ? "selected" : ""}`}
            onClick={() => {
              scrollTo(aboutRef.current);
            }}
            >
              About
            </button>
            <button type="button" 
            className={`header_link ${visibleSection === "Projects" ? "selected" : ""}`}
            onClick={() => {
              scrollTo(projectsRef.current);
            }}
            >
              Projects
            </button>
            <button type="button" 
            className={`header_link ${visibleSection === "Contact" ? "selected" : ""}`}
            onClick={() => {
              scrollTo(contactRef.current);
            }}
            >
              Contact
            </button>
            <button type="button" className='resumeButton' onClick={onButtonClick}>
              Resume
            </button>
          </div>
        </div>
        <div className="section" id="Home" ref={ homeRef }>
            <div className='homeBox'>   
                  <p className='homeP'>
                  &#128075; Hi, I’m Jason
                  I am a software engineer and a student.
                  Scroll down to learn more about me and my projects :)
                  </p>
            </div>   
        </div>
        <div className="section" id="About" ref={ aboutRef }>
            <h1 className={`aboutHeader`}>About Me</h1>
            <div className={`aboutCardDiv ${visibleSection === "About" ? "fadeinP" : "hidden"}`}>
              <p className={`aboutP`}>
              Hello! My name is Jason Lin and I enjoy creating software as well as learning new ideas. 
              I am currently a student at the University of Central Florida and from there, I learned a lot about full stack software development and computer science.
              My current focuses right now are on learning more about web development as well as other software development topics.
              I am experienced in creating MERN stack projects as well as LAMP stack projects. 
              I am also experienced with Git, MySQL, and Visual Studio Code, I hope to make more use of these as I progress on with my career. 
              I can also speak and comprehend limited Mandarin Chinese. 
              Other than programming, I enjoy watching basketball and watching TV in my free time.
              </p>
              <div className='aboutImgDiv'>
                {/*<img src='program.png' alt='program' className={`aboutImg ${visibleSection === "About" ? "fadeinP" : "hidden"}`}/> */}
              </div>
            </div>
        </div> 

        <div className="section" id="Projects" ref={ projectsRef }>
            <h2 className={`projectsHeader`}>Here are some of the projects I've worked on</h2>
        </div>
        <div className="section" id="Contact" ref={contactRef}/>
      </div>

      <div className="bottom-spacer" />
    </div>
  );
}

export default App;

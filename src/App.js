import './App.css';
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
            <button type="button" className="header_link">
              Contact
            </button>
            <button type="button" className='resumeButton' onClick={onButtonClick}>
              Resume
            </button>
          </div>
        </div>
        <div className="section" id="Home" ref={ homeRef }>
                  <p className='homeP'>
                  👋 Hi, I’m Jason
          I am a software engineer and a student.
          Scroll down to learn more about me and my projects :)
          </p>
        </div>
        <div className="section" id="About" ref={ aboutRef }>
            <h1 className="aboutHeader">About Me</h1>
        </div> 

        <div className="section" id="Projects" ref={ projectsRef }/>
        <div className="section" id="Contact" ref={contactRef}/>
      </div>

      <div className="bottom-spacer" />
    </div>
  );
}

export default App;

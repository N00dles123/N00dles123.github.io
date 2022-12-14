import './App.css';

function App() {
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
          <div className="header">
            <button type="button" className="header_link">
              About
            </button>
            <button type="button" className="header_link">
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
        <div className="section" id="Home">
                  <p className='homeP'>
                  👋 Hi, I’m Jason
          I am a software engineer and a student.
          Scroll down to learn more about me and my projects :)
          </p>
        </div>
        <div className="section" id="About" />

        <div className="section" id="Projects" />
        <div className="section" id="Contact" />
      </div>

      <div className="bottom-spacer" />
    </div>
  );
}

export default App;

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
        <div className="section" id="Leadership" />
        <div className="section" id="Providers" />
        <div className="section" id="Operations" />
      </div>

      <div className="bottom-spacer" />
    </div>
  );
}

export default App;

import Nav from './layout/Nav.js';
import Carousel from './layout/Carousel.js';
import Feature from './layout/Feature.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Carousel />
        <Feature />
        <p>
          SWL Garden Structures
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >

        </a>
      </header>
    </div>
  );
}

export default App;

import Nav from './layout/Nav.js';
import Carousel from './layout/Carousel.js';
import Feature from './layout/Feature.js';
import Footer from './layout/Footer.js';
import Testimonials from './layout/Testimonials.js';
import './App.css';

function App() {
  return (
    <div className="App">

        <Nav />
        <Carousel />
        <Feature />
        <Testimonials />
        <Footer />

    </div>
  );
}

export default App;

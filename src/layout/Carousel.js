import './css/carousel.css'
import logo from '../images/logo.svg';
import logo1 from '../images/logo1.svg';
import logo2 from '../images/logo2.svg';
import logo3 from '../images/swllogo5.svg';
import logoblk from '../images/swllogoblk.svg';
import homeoffice from '../images/homeoffice795.svg';
import homeofficelogo from '../images/homeofficelogo.svg';

function Carousel() {
  return (
     <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
     <hr className="featurette-divider" />
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={homeofficelogo} width="60%" height="60%"/>

          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Beautiful Garden Structures.</h1>
              <p>Bring your garden to life with style.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Sign up today</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={homeoffice} width="60%" height="60%"/>
          <div className="container">
            <div className="carousel-caption">
              <h1>Another example headline.</h1>
              <p>Some representative placeholder content for the second slide of the carousel.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Learn more</a></p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img src={homeoffice} width="60%" height="80%"/>

          <div className="container">
            <div className="carousel-caption text-end">
              <h1>SWL Beautiful Creations</h1>
              <p>Some representative placeholder content for the third slide of this carousel.</p>
              <p><a className="btn btn-lg btn-primary" href="#">Browse gallery</a></p>
            </div>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
      <hr />
    </div>
);
}

export default Carousel;

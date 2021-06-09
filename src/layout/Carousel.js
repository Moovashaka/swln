import './css/carousel.css'
import logoback from '../images/logoback.svg';
import gologo from '../images/gardenofficelogo.svg';

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
          <img alt="Garden Buildings Home offices" src={logoback} width="60%" height="60%"/>

          <div className="container">
            <div className="carousel-caption text-start">
              <h1>Beautiful Garden Structures.</h1>
              <p>Bring your garden to life with style.</p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img alt="Garden Buildings Home offices" src={gologo} width="60%" height="60%"/>
          <div className="container">
            <div className="carousel-caption">
              <h1>Create Beautiful Spaces.</h1>
              <p>SWL design and build your perfect space </p>
            </div>
          </div>
        </div>
        <div className="carousel-item">
          <img alt="Garden Buildings Home offices" src={logoback} width="60%" height="60%"/>

          <div className="container">
            <div className="carousel-caption text-end">
              <h1>SWL Beautiful Creations</h1>
              <p>We use Certified Sustainable Materials for a job we can all be proud of</p>
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

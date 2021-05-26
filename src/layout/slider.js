import './css/carousel.css'
import logo from '../logo.svg';
import logo1 from '../logo1.svg';
import logo2 from '../logo2.svg';

function Carousel() {
  return (
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={logo} className="d-block w-100" alt="logo" />
    </div>
    <div className="carousel-item">
      <img src={logo1}  alt="logo1" className="d-block w-100" />
    </div>
    <div className="carousel-item">
      <img src={logo2} alt="logo2" className="d-block w-100" />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
);
}

export default Carousel;

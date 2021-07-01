import timbdeck from '../images/timberdecking1.svg';
import shedoffice from '../images/shedoffice.png';
import summerhouse from '../images/summerhouse3.jpeg';
import decking from '../images/decking.svg';
import carport from '../images/carport.svg';
import logo from '../images/logo.png';

function Feature() {
  return (
<div className="container marketing">

  {/* <!-- Three columns of text below the carousel --> */}
  <div className="row">
    <div className="col-lg-4">
      <img alt="Home offices" className="bd-placeholder-img rounded-circle" width="140" height="140" src={shedoffice} aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

      <h2>Garden Office</h2>
      <p>SWL can design & build your perfect Home Office. Get creative in the tranquil setting of your own home.</p>

     </div> {/*<!-- /.col-lg-4 --> */}
     <div className="col-lg-4">
      <img alt="Garden Buildings Home offices" className="bd-placeholder-img rounded-circle" width="140" height="140" src={summerhouse} aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

      <h2>Summer Houses</h2>
      <p>Our design team love creating the perfect outdoor space for you and your family to enjoy long into the future.</p>

    </div> {/*<!-- /.col-lg-4 -->*/}
    <div className="col-lg-4">
      <img alt="Garden Buildings Home offices" className="bd-placeholder-img rounded-circle" width="140" height="140" src={timbdeck} aria-label="Placeholder: 140x140" preserveAspectRatio="xMidYMid slice" focusable="false" />

      <h2>Decking</h2>
      <p>We use sustainably sourced materials and proven techniques to give you decking that you're gonna love!</p>

    </div> {/*<!-- /.col-lg-4 -->*/}
  </div> {/*<!-- /.row -->*/}


   {/* <!-- START THE FEATURETTES --> */}

  <hr className="featurette-divider" />

  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading">SWL Garden Structures. <span className="text-muted">For a quality Job.</span></h2>
      <p className="lead">SWL are based in the Northwest of England and serve the Sefton, Preston, North Merseyside etc areas</p>
      <p className="lead">We are committed to providing the best service at the right price. We can design and build whatever you need
      to make your outdoor space as special as you wish it to be.</p>
      <p className="lead">We are committed to providing the best service at the right price. We can design and build whatever you need
      to make your outdoor space as special as you wish it to be.</p>
    </div>
    <div className="col-md-5">
      <img alt="Garden Buildings Home offices" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" src={logo} height="500" focusable="false" />

    </div>
  </div>

  <hr className="featurette-divider" />

  <div className="row featurette">
    <div className="col-md-7 order-md-2">
      <h2 className="featurette-heading">Need New Decking? <span className="text-muted">Top Quality Materials.</span></h2>
      <p className="lead">We can repair, replace or design and build from scratch your decking.</p>
      <p className="lead">We only use top quality sustainably sourced materials from the best local suppliers.</p>
    </div>
    <div className="col-md-5 order-md-1">
      <img alt="Garden Buildings Home offices" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" src={decking} height="500" focusable="false" />

    </div>
  </div>

  <hr className="featurette-divider" />

  <div className="row featurette">
    <div className="col-md-7">
      <h2 className="featurette-heading">About Us? <span className="text-muted">Passion, Commitment!</span></h2>
      <p className="lead">And yes, this is the last block of representative placeholder content. Again, not really intended to be actually read, simply here to give you a better view of what this would look like with some actual content. Your content.</p>
    </div>
    <div className="col-md-5">
      <img alt="Garden Buildings Home offices" className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto" width="500" src={carport} height="500" focusable="false" />

    </div>
  </div>

  <hr className="featurette-divider" />

  {/* <!-- /END THE FEATURETTES --> */}

</div>

);
}

export default Feature;

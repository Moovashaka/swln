function Nav() {
  return(
<header>
  <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href={"#"}>Home</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={"#"}>Testimonials</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={"#"} />Link>
          </li>
          <li className="nav-item">
            <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true" >Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <hr />
</header>

);
}

export default Nav;

import strings from "utilities/strings";

export default function Navbar() {
  const homeLink = window.location.pathname === "/" ? "#inicio" : "/";

  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s">
      <a href="/" className="navbar-brand ms-4 ms-lg-0">
        <img className="vinil-logo" src="img/logo.png" alt="Image"/>
      </a>

      <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto p-4 p-lg-0">
          <a href={ homeLink } className="nav-item nav-link">{ strings.navbar.links.home }</a>
          <a href="#sobre" className="nav-item nav-link">{ strings.navbar.links.about }</a>
          <a href="#servicos" className="nav-item nav-link">{ strings.navbar.links.services }</a>
          <a href="#precos" className="nav-item nav-link">{ strings.navbar.links.prices }</a>
          <a href="#equipe" className="nav-item nav-link">{ strings.navbar.links.team }</a>
          <a href="#horarios" className="nav-item nav-link">{ strings.navbar.links.workingTime }</a>
        </div>

        <a href={ strings.schedule } className="btn btn-primary rounded-0 py-2 px-lg-4 d-none d-lg-block">{ strings.navbar.schedule }<i className="fa fa-arrow-right ms-3"></i></a>
      </div>
    </nav>
  )
}

import strings from "utilities/strings";

export default function Footer() {
  return (
    <>
      <div className="container-fluid bg-secondary text-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-md-6">
              <h4 className="text-uppercase mb-4">{ strings.footer.contact }</h4>
              <div className="d-flex align-items-center mb-2">
                <div className="btn-square bg-dark flex-shrink-0 me-3">
                  <span className="fa fa-map-marker-alt text-primary"></span>
                </div>
                <span>{ strings.address }</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <div className="btn-square bg-dark flex-shrink-0 me-3">
                  <span className="fa fa-phone-alt text-primary"></span>
                </div>
                <span>{ strings.phone }</span>
              </div>
            </div>
            <div className="col-md-6">
              <h4 className="text-uppercase mb-4">{ strings.footer.social }</h4>
              <div className="d-flex pt-1 m-n1">
                <a className="btn btn-lg-square btn-dark text-primary m-1" href={ strings.instagram }><i className="fab fa-instagram"></i></a>
                <a className="btn btn-lg-square btn-dark text-primary m-1" href={ strings.facebook }><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-lg-square btn-dark text-primary m-1" href={ strings.whatsapp }><i className="fab fa-whatsapp"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                &copy; Desenvolvido por <a className="border-bottom" href="https://dscvr.space">DSCVR Space</a>
              </div>
              <div className="col-md-6 text-center text-md-end">
                Projetado por HTML Codex
              </div>
            </div>
          </div>
        </div>
      </div>

      <a href="#" className="btn btn-primary btn-lg-square back-to-top">
        <i className="bi bi-arrow-up"></i>
      </a>
    </>
  )
}

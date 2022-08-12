import strings from "utilities/strings";

export default function Hero() {
  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          { strings.hero.items.map((item, index) =>
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={ item }>
              <img className="w-100" src={ item.image } alt="Image"/>
              <div className="carousel-caption d-flex align-items-center justify-content-center text-start">
                <div className="mx-sm-5 px-5" style={{ maxWidth: 900 }}>
                  <h1 className="display-2 text-white text-uppercase mb-4 animated slideInDown">{ item.title }</h1>
                  <h4 className="text-white text-uppercase mb-4 animated slideInDown"><i className="fa fa-map-marker-alt text-primary me-3"></i>{ strings.address }</h4>
                  <h4 className="text-white text-uppercase mb-4 animated slideInDown"><i className="fa fa-phone-alt text-primary me-3"></i>{ strings.phone }</h4>
                </div>
              </div>
            </div>
          )}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Próximo</span>
        </button>
      </div>
    </div>
  )
}

import strings from "utilities/strings";

export default function Services() {
  return (
    <div className="container-xxl py-5" id="servicos">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
          <p className="d-inline-block bg-secondary text-primary py-1 px-4">{ strings.services.title }</p>
          <h1 className="text-uppercase">{ strings.services.subtitle }</h1>
        </div>
        <div className="row g-4">
          { strings.services.items.map(item =>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={ item.title }>
              <div className="service-item position-relative overflow-hidden bg-secondary d-flex h-100 p-5 ps-0">
                <div className="bg-dark d-flex flex-shrink-0 align-items-center justify-content-center" style={{ width: 60, height: 60 }}>
                  <img className="img-fluid" src={ item.icon } alt={ item.title }/>
                </div>
                <div className="ps-4">
                  <h3 className="text-uppercase mb-3">{ item.title }</h3>
                  <p>{ item.text }</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

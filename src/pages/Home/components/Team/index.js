import strings from "utilities/strings";

export default function Team() {
  return (
    <div className="container-xxl py-5" id="equipe">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
          <p className="d-inline-block bg-secondary text-primary py-1 px-4">{ strings.team.title }</p>
          <h1 className="text-uppercase">{ strings.team.subtitle }</h1>
        </div>
        <div className="row g-4">
          { strings.team.barbers.map(item =>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s" key={ item.name }>
              <div className="team-item">
                <div className="team-img position-relative overflow-hidden">
                  <img className="img-fluid" src={ item.avatar } alt={ item.name }/>
                  <div className="team-social">
                    <a className="btn btn-square" href={ item.instagram }><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
                <div className="bg-secondary text-center p-4">
                  <h5 className="text-uppercase">{ item.name }</h5>
                  {/*
                    <span className="text-primary">Designation</span>
                  */}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>

  )
}

import strings from "utilities/strings";

export default function About() {
  return (
    <div className="container-xxl py-5" id="sobre">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
            <div className="d-flex flex-column">
              <div className="team-image"></div>

              <div className="experience-container bg-secondary p-5" style={{ marginTop: "-25%" }}>
                <h1 className="text-uppercase text-primary mb-3">{ strings.about.experience.years }</h1>
                <h2 className="text-uppercase mb-0">{ strings.about.experience.text }</h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
              <p className="d-inline-block bg-secondary text-primary py-1 px-4">{ strings.about.title }</p>
              <h1 className="text-uppercase mb-4">{ strings.about.subtitle }</h1>
              <p>{ strings.about.text.first }</p>
              <p className="mb-4">{ strings.about.text.second }</p>
              <div className="row g-4">
                { strings.about.highlight.map(item =>
                  <div className="col-md-6" key={ item.title }>
                    <h3 className="text-uppercase mb-3">{ item.title }</h3>
                    <p className="mb-0">{ item.text }</p>
                  </div>
                )}
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

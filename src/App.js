import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Nav } from 'react-bootstrap';

function App() {
  return (
    <div>

      <header >
        <Nav className="navbar navbar-expand-lg navbar-dark d-none d-block navbar-zindex">
          <div className="container">
            <a className="navbar-brand nav-link" target="_blank" href="https://mdbootstrap.com/docs/standard/" rel="noreferrer">
              <strong>ONGEITOR</strong>
            </a>
            <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01" aria-expanded="false" aria-label="Toggle navigation">
              <i className="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <a className="nav-link" aria-current="page" href="#intro">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA" rel="nofollow noreferrer"
                    target="_blank">Listado ONG</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://mdbootstrap.com/docs/standard/" target="_blank" rel="noreferrer">Contacto</a>
                </li>
              </ul>
            </div>
          </div>
        </Nav>

        <Carousel fade interval={5000}>
          <Carousel.Item  >
            <img
              src="https://mdbootstrap.com/img/Photos/Others/images/76.jpg"
              alt="First slide"
              className="d-block w-100 csel"
            />
            <Carousel.Caption >
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Others/images/76.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://mdbootstrap.com/img/Photos/Others/images/76.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      </header >

      <main className="mt-5">
        <div className="container">
          <section>
            <div className="row">
              <div className="col-md-6 gx-5 mb-4">
                <div className="bg-image hover-overlay ripple shadow-2-strong" data-mdb-ripple-color="light">
                  <img src="https://mdbootstrap.com/img/new/slides/031.jpg" alt="" className="img-fluid" />
                  <a href="#!">
                    <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                  </a>
                </div>
              </div>

              <div className="col-md-6 gx-5 mb-4">
                <h4><strong>Facilis consequatur eligendi</strong></h4>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis consequatur
                  eligendi quisquam doloremque vero ex debitis veritatis placeat unde animi laborum
                  sapiente illo possimus, commodi dignissimos obcaecati illum maiores corporis.
            </p>
                <p><strong>Doloremque vero ex debitis veritatis?</strong></p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod itaque voluptate
                  nesciunt laborum incidunt. Officia, quam consectetur. Earum eligendi aliquam illum
                  alias, unde optio accusantium soluta, iusto molestiae adipisci et?
            </p>
              </div>
            </div>
          </section>

          <hr className="my-5" />

          <section className="text-center">
            <h4 className="mb-5"><strong>Facilis consequatur eligendi</strong></h4>

            <div className="row">
              <div className="col-lg-4 col-md-12 mb-4">
                <div className="card">
                  <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/nature/184.jpg" alt="" className="img-fluid" />
                    <a href="#!">
                      <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                    </a>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                      Some quick example text to build on the card title and make up the bulk of the
                      card's content.
                </p>
                    <a href="#!" className="btn btn-primary">Button</a>
                  </div>
                </div>
              </div>

            </div>
          </section>

          <hr className="my-5" />

          <section className="mb-5">
            <h4 className="mb-5 text-center"><strong>Facilis consequatur eligendi</strong></h4>

            <div className="row d-flex justify-content-center">
              <div className="col-md-6">
                <form>
                  <div className="row mb-4">
                    <div className="col">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" className="form-control" />
                        <label className="form-label" htmlFor="form3Example1">First name</label>
                      </div>
                    </div>
                    <div className="col">
                      <div className="form-outline">
                        <input type="text" id="form3Example2" className="form-control" />
                        <label className="form-label" htmlFor="form3Example2">Last name</label>
                      </div>
                    </div>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="email" id="form3Example3" className="form-control" />
                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                  </div>

                  <div className="form-outline mb-4">
                    <input type="password" id="form3Example4" className="form-control" />
                    <label className="form-label" htmlFor="form3Example4">Password</label>
                  </div>

                  <div className="form-check d-flex justify-content-center mb-4">
                    <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                    <label className="form-check-label" htmlFor="form2Example3">
                      Subscribe to our newsletter
                </label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4">
                    Sign up
              </button>

                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-primary btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
}

export default App;

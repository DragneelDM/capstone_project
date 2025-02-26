// Footer.js
import React from "react";

const Footer = () => {
  return (
    <footer>
      {" "}
      {
        <footer className="text-center text-lg-start bg-body-tertiary text-muted">
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div>
              <a href="" className="me-4 text-reset" title="#!">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="" className="me-4 text-reset" title="#!">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="" className="me-4 text-reset" title="#!">
                <i className="fab fa-google"></i>
              </a>
              <a href="" className="me-4 text-reset" title="#!">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="" className="me-4 text-reset" title="#!">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="" className="me-4 text-reset" title="#!">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section className="">
            <div className="container text-center text-md-start mt-5">
              <div className="row mt-3">
                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4 ms-3 ps-3">
                  <h6 className="text-uppercase fw-bold mb-4">
                    Little Lemon Restaurant
                  </h6>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>

                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                  <p>
                    <a href="#!" className="text-reset" title="#!">
                      Angular
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset" title="#!">
                      React
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset" title="#!">
                      Vue
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset" title="#!">
                      Laravel
                    </a>
                  </p>
                </div>

                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                  <p>
                    <a href="#!" className="text-reset" title="#!">
                      Pricing
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset" title="#!">
                      Settings
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset" title="#!">
                      Orders
                    </a>
                  </p>
                  <p>
                    <a href="#!" className="text-reset" title="#!">
                      Help
                    </a>
                  </p>
                </div>

                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                  <p>
                    <i className="fas fa-home me-3"></i> Chicago, Hell
                  </p>
                  <p>
                    <i className="fas fa-envelope me-3"></i>
                    info@example.com
                  </p>
                  <p>
                    <i className="fas fa-phone me-3"></i> + 01 234 567 88
                  </p>
                  <p>
                    <i className="fas fa-print me-3"></i> + 01 234 567 89
                  </p>
                </div>
              </div>
            </div>
          </section>

          <div className="text-center p-4 ">© 2021 Copyright: Madhan MP</div>
        </footer>
      }{" "}
    </footer>
  );
};

export default Footer;

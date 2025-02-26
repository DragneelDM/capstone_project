// Footer.js
import React from "react";
import AboutImage from "./assets/Mario and Adrian A.jpg";

const AboutUS = () => {
  return (
    <section className="m-5">
      {" "}
      {
        <section className="m-5 py-3 py-md-5 py-xl-8">
          <div className="container">
            <div className="row gy-3 gy-md-4 gy-lg-0 align-items-lg-center">
              <div className="col-12 col-lg-6 col-xl-7">
                <div className="row justify-content-xl-center">
                  <div className="col-12 col-xl-11">
                    <h2 className="h1 mb-3">Little Lemon</h2>
                    <p className="h4">Chicago</p>
                    <p className="lead fs-4 text-secondary mb-3">
                      We help people to build incredible brands and superior
                      products. Our perspective is to furnish outstanding
                      captivating services.
                    </p>
                    <p className="mb-5">
                      Nullam gravida orci ac luctus molestie. Fusce finibus
                      congue erat, non aliquam magna tincidunt at. Aenean
                      lacinia arcu ex, sed pharetra nibh porta a. Curabitur vel
                      consequat nibh, ac interdum nisl. Nunc pulvinar nec massa
                      vitae sollicitudin.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-lg-6 col-xl-5">
                <img
                  className="img-fluid rounded"
                  loading="lazy"
                  src={AboutImage}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      }{" "}
    </section>
  );
};

export default AboutUS;

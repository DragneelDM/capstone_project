import React from 'react';

const DelieveriesPage = () => {
  return (
    <>
    <section className="h-100">
  <div className="container h-100 py-5">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-10">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
          <div>
            <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body" title='#!'>price <i
                  className="fas fa-angle-down mt-1"></i></a></p>
          </div>
        </div>

        <div className="card rounded-3 mb-4">
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                  src="https://www.littlelemonfriendsnft.com/assets/type1.png"
                  className="img-fluid rounded-3" alt="Cotton T-shirt" />
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">Your Order</p>
                <p><span className="text-muted">12:15 </span>M <span className="text-muted">Delievered </span></p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i className="fas fa-minus"></i>
                </button>

                <input id="form1" min="0" name="quantity" value="2" type="number"
                  className="form-control form-control-sm" />

                <button className="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">$72.00</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger" title='#!'><i className="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="card rounded-3 mb-4">
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                  src="https://www.littlelemonfriendsnft.com/assets/type1.png"
                  className="img-fluid rounded-3" alt="Cotton T-shirt" />
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">Your Order</p>
                <p><span className="text-muted">12:15 </span>M <span className="text-muted">Delievered </span></p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i className="fas fa-minus"></i>
                </button>

                <input id="form1" min="0" name="quantity" value="2" type="number"
                  className="form-control form-control-sm" />

                <button className="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">$49.00</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger" title='#!'><i className="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="card rounded-3 mb-4">
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                  src="https://www.littlelemonfriendsnft.com/assets/type1.png"
                  className="img-fluid rounded-3" alt="Cotton T-shirt" />
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">Your Order</p>
                <p><span className="text-muted">12:15 </span>M <span className="text-muted">Delievered </span></p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i className="fas fa-minus"></i>
                </button>

                <input id="form1" min="0" name="quantity" value="2" type="number"
                  className="form-control form-control-sm" />

                <button className="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">$29.00</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger" title='#!'><i className="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div className="card rounded-3 mb-4">
          <div className="card-body p-4">
            <div className="row d-flex justify-content-between align-items-center">
              <div className="col-md-2 col-lg-2 col-xl-2">
                <img
                  src="https://www.littlelemonfriendsnft.com/assets/type1.png"
                  className="img-fluid rounded-3" alt="Cotton T-shirt" />
              </div>
              <div className="col-md-3 col-lg-3 col-xl-3">
                <p className="lead fw-normal mb-2">Your Order</p>
                <p><span className="text-muted">12:15 </span>M <span className="text-muted">Delievered </span></p>
              </div>
              <div className="col-md-3 col-lg-3 col-xl-2 d-flex">
                <button className="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepDown()">
                  <i className="fas fa-minus"></i>
                </button>

                <input id="form1" min="0" name="quantity" value="2" type="number"
                  className="form-control form-control-sm" />

                <button className="btn btn-link px-2"
                  onclick="this.parentNode.querySelector('input[type=number]').stepUp()">
                  <i className="fas fa-plus"></i>
                </button>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                <h5 className="mb-0">$499.00</h5>
              </div>
              <div className="col-md-1 col-lg-1 col-xl-1 text-end">
                <a href="#!" className="text-danger" title='#!'><i className="fas fa-trash fa-lg"></i></a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>
    </>
  );
}

export default DelieveriesPage;

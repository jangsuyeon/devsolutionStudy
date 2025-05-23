import "/public/vendor/css/core.css";
import "/public/vendor/css/theme-default.css";
import "/public/css/demo.css";
import "/public/vendor/libs/perfect-scrollbar/perfect-scrollbar.css";
import "/public/vendor/css/pages/page-auth.css";
import "/public/vendor/fonts/boxicons.css";

// import "/public/vendor/libs/jquery/jquery.js";
// import "/public/vendor/libs/popper/popper.js";
// import "/public/vendor/js/bootstrap.js";
// import "/public/vendor/libs/perfect-scrollbar/perfect-scrollbar.js";
// import "/public/vendor/js/menu.js";
// import "/public/js/main.js";

function RegisterForm() {
    return (
      <>
        {/* Register Card */}
        <div className="col-xl">
          <div className="card mb-4">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 className="mb-0">Basic with Icons</h5>
              <small className="text-muted float-end">Merged input group</small>
            </div>
            <div className="card-body">
              <form>
                <div className="mb-3">
                  <label className="form-label" htmlFor="basic-icon-default-fullname">Full Name</label>
                  <div className="input-group input-group-merge">
                    <span id="basic-icon-default-fullname2" className="input-group-text"
                      ><i className="bx bx-user"></i
                    ></span>
                    <input
                      type="text"
                      className="form-control"
                      id="basic-icon-default-fullname"
                      placeholder="John Doe"
                      aria-label="John Doe"
                      aria-describedby="basic-icon-default-fullname2"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="basic-icon-default-company">Company</label>
                  <div className="input-group input-group-merge">
                    <span id="basic-icon-default-company2" className="input-group-text"
                      ><i className="bx bx-buildings"></i
                    ></span>
                    <input
                      type="text"
                      id="basic-icon-default-company"
                      className="form-control"
                      placeholder="ACME Inc."
                      aria-label="ACME Inc."
                      aria-describedby="basic-icon-default-company2"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="basic-icon-default-email">Email</label>
                  <div className="input-group input-group-merge">
                    <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                    <input
                      type="text"
                      id="basic-icon-default-email"
                      className="form-control"
                      placeholder="john.doe"
                      aria-label="john.doe"
                      aria-describedby="basic-icon-default-email2"
                    />
                    <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                  </div>
                  <div className="form-text">You can use letters, numbers & periods</div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="basic-icon-default-phone">Phone No</label>
                  <div className="input-group input-group-merge">
                    <span id="basic-icon-default-phone2" className="input-group-text"
                      ><i className="bx bx-phone"></i
                    ></span>
                    <input
                      type="text"
                      id="basic-icon-default-phone"
                      className="form-control phone-mask"
                      placeholder="658 799 8941"
                      aria-label="658 799 8941"
                      aria-describedby="basic-icon-default-phone2"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label" htmlFor="basic-icon-default-message">Message</label>
                  <div className="input-group input-group-merge">
                    <span id="basic-icon-default-message2" className="input-group-text"
                      ><i className="bx bx-comment"></i
                    ></span>
                    <textarea
                      id="basic-icon-default-message"
                      className="form-control"
                      placeholder="Hi, Do you have a moment to talk Joe?"
                      aria-label="Hi, Do you have a moment to talk Joe?"
                      aria-describedby="basic-icon-default-message2"
                    ></textarea>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
              </form>
            </div>
          </div>
        </div>
        {/* Register Card */}
      </>
    )
}

export default RegisterForm
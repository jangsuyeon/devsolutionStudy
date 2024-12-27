import React from 'react'
import "/public/css/demo.css"
import "/public/vendor/css/core.css"
import "/public/vendor/css/theme-default.css"
import "/public/vendor/libs/perfect-scrollbar/perfect-scrollbar.css"
import "/public/vendor/js/menu.js"
import "/public/css/project/projectList.css"

const ProjectAdd = (props) => {
    const { open, close } = props;

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (<div className="col-lg-3 col-md-6">
                <div className="mt-3">
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasEnd"
                    aria-labelledby="offcanvasEndLabel"
                >
                    <div className="offcanvas-header">
                    <h5 id="offcanvasEndLabel" className="offcanvas-title">Offcanvas End</h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                    </div>
                    <div className="offcanvas-body my-auto mx-0 flex-grow-0">
                    <p className="text-center">
                        내용
                    </p>
                    <button type="button" className="btn btn-primary mb-2 d-grid w-100">Continue</button>
                    <button
                        type="button"
                        className="btn btn-outline-secondary d-grid w-100"
                        data-bs-dismiss="offcanvas"
                    >
                        Cancel
                    </button>
                    </div>
                </div>
                </div>
            </div>) : null}
        </div>
    )
}

export default ProjectAdd
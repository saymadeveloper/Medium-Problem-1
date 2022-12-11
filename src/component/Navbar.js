import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="bg-light p-2">
        <div className="container-fluid">
          <div className="d-flex flex-wrap justify-content-between" >
            <div className='d-flex'>
              {/* MENU BUTTON */}
              <i className="bi bi-justify margin-right-20 fs-4 mt-3" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample"></i>
              {/* LOGO IMAGE */}
              <img src="/images/logo.png" className='mt-3 margin-right-20' alt="" height="32" />
              {/* SEARCH FIELD */}
              <form className='mt-2'>
                <div className='position-relative search-input-width'>
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" defaultValue="computed tomography" />
                  <button className="btn btn-primary position-absolute top-50 end-0 translate-middle-y" type="submit"><i className="bi bi-search"></i></button>
                </div>
              </form>
            </div>
            <div>
              {/* SIGN IN BUTTON */}
              <ul className="navbar-nav mt-2">
                <li className="nav-item">
                  <a className='link-color' aria-current="page" href="#">Signin</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header border-bottom">
          <i className="bi bi-justify fs-4 text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></i>
          <img src="/images/logo.png" className='margin-right-20' alt="" height="30" />
        </div>
        <div class="offcanvas-body-div border-bottom list">
          <ul className="navbar-nav">
            <li className="nav-item lh-lg">
              <a className="link-color text-danger fs-6" aria-current="page" href="#">Articles</a>
            </li>
            <li className="nav-item mt-2 lh-lg">
              <a className="link-color fs-6" aria-current="page" href="#">Case law</a>
            </li>
            <li className="nav-item mt-2 lh-lg">
              <a className="link-color fs-6" aria-current="page" href="#">Profiles</a>
            </li>
          </ul>
        </div>
        <div class="border-bottom list offcanvas-padding">
          <ul className="navbar-nav">
            <li className="nav-item lh-lg">
              <i class="bi bi-mortarboard-fill text-muted margin-right-7 offcanvas-icon-fs"></i>
              <a href='#' className='link-color fs-6'>My profile</a>
            </li>
            <li className="nav-item mt-2 lh-lg">
              <i class="bi bi-star-fill text-muted margin-right-7 offcanvas-icon-fs"></i>
              <a href='#' className='link-color fs-6'>My library</a>
            </li>
            <li className="nav-item mt-2 lh-lg">
            <i class="bi bi-envelope-fill text-muted margin-right-7 offcanvas-icon-fs"></i>
                <a href='#' className='link-color fs-6'>Alerts</a>
            </li>
            <li className="nav-item mt-2">
              <i class="bi bi-bar-chart-fill text-muted margin-right-7 offcanvas-icon-fs"></i>
              <a className="link-color fs-6" href="#">Metrics</a>
            </li>
          </ul>
        </div>
        <div class="border-bottom list offcanvas-search-padding">
          <ul className="navbar-nav">
            <li className="nav-item lh-lg">
              <i class="bi bi-search-heart-fill text-muted margin-right-7 offcanvas-icon-fs"></i>
              <a href='#' className='link-color fs-6'>Advanced search</a>
            </li>
          </ul>
        </div>
        <div class="list offcanvas-search-padding">
          <ul className="navbar-nav">
            <li className="nav-item lh-lg">
              <i class="bi bi-gear-fill text-muted margin-right-7 offcanvas-icon-fs"></i>
              <a href='#' className='link-color fs-6'>Setting</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
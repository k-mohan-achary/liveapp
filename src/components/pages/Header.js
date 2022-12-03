import React from 'react'
import logo from "../assets/image-1@2x.png"
import "../stylesheets/metalok.css" 

export const Header = () => {
  return (
    <div>
        <section className='nav'>
        <div className='container'>
          {/* <img src={background} alt="back" className='back' /> */}
          <div className='row'>
            <div className='col-md-3'>
              <img src={logo} alt="back" className='' />
            </div>
            <div className='col-md-9 menu'>
              <nav class="navbar navbar-expand-md navbar-dark nav">
                <a className="navbar-brand" href="#"> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav">
                  <li className="nav-item text-primary"><a href="#" className="nav-link "> Home</a></li>
                    <li className="nav-item "><a href="#" className="nav-link "> About </a></li>
                    <li className="nav-item "><a href="#" className="nav-link"> Products</a></li>
                    <li className="nav-item "><a href="#" className="nav-link "> Virtual projects</a></li>
                    <li className="nav-item "><a href="#" className="nav-link "> Careers</a></li>
                    <li className="nav-item "><a href="#" className="nav-link "> Our Partners</a></li>
                    <li className="nav-item "><a href="#" className="nav-link "> Blog</a></li>
                    <li className="nav-item "><a href="#" className="nav-link "> Contact</a></li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>

        </div>
      </section>
      
    </div>
  )
}

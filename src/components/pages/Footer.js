import React from 'react'
import logo from "../assets/image-1@2x.png"
import "../stylesheets/metalok.css" 

export const Footer = () => {
  return (
    <div>
        <section className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4 flogo'>
              <img src={logo} alt="back" className='' />
              <div>
                <i class="fab fa-instagram"></i>

              </div>
            </div>

          </div>

        </div>
        <nav class="nav">
          <div class="container" >
            <div class="row">
              <div class="col-md-12 text-white" >
                <ul class="nav justify-content-center">
                  <li class="p-3"> Home</li>
                  <li class="p-3"><a href="#"> About</a></li>
                  <li class="p-3"><a href="#"> Product</a></li>
                  <li class="p-3"><a href="#"> Virtual Project</a></li>
                  <li class="p-3"> Careers</li>
                  <li class="p-3"><a href="#"> Our Partners</a></li>
                  <li class="p-3"><a href="#"> Blog</a></li>
                  <li class="p-3"><a href="#"> Contact</a></li>
                  
                </ul>

              </div>
            </div>
          </div>
        </nav>

        <div className='container'>
        <div className='row'>
        <div className='col-md-12'>
          <p className='text-white'>2022 Metalok Solutions Pvt Limited.</p>
          <p className='text-white'>Regd office: Trendz Axis , 5 Floor, H.No: 1-89/A/7, on Plot No.7, Survey Nos.28,29,&30,<br></br>Madhapur, Gachibowli, Hyderabad, Telangana-500081.</p>
          <p className='text-warning'>hello@metalok.io</p>
          <b><p className='text-white'>Phone : +917995001999</p></b>

        </div>

        </div>
        </div>


      </section>

    </div>
  )
}

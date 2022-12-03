import React from 'react'

import logo from "../assets/image-1@2x.png"
//import background from "../assets/bg-1.png"
import globe from "../assets/icon_header.png"
import "../stylesheets/metalok.css"
import { Globe } from './Globe'
import { Cube } from './Cube'
import { Header } from './Header'
import { Footer } from './Footer'

const Metalok = () => {
  return (
    <div>

      <Header />

      <section className=''>
        <div className='container section1'>
          <div className='row'>
            <div className='col-md-6'>
              <h1> Find Your Space in Metalok </h1>
            </div>
            <div className='col-md-6'>
              <img src={globe} alt="back" className='' width="100%" />
            </div>
          </div>
        </div>
      </section>

      <section className='three'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-4'>
              <h3>Sports Verse</h3>
              <p>Sportsverse is a gamified world where your favourite sports meet the art of trading.</p>
            </div>
            <div className='col-md-4'>
              <h3>Meta Influence</h3>
              <p>See them, hear them, experience them in a Metaworld from beyond.</p>
            </div>
            <div className='col-md-4'>

              <h3>Temple Dao</h3>
              <p>Temple Dao a digital decentralized autonomous organization and a form of investor-directed venture capital fund.</p>
            </div>

          </div>

        </div>

      </section>

      <Globe />
      <Cube />
      <Footer/>
      


    </div>
  )
}

export default Metalok;
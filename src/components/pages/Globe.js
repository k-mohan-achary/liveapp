import React from 'react'
import ground from "../assets/sportsverse-1.png"
import "../stylesheets/metalok.css" 


export const Globe = () => {
  return (
    <div>
        <section className='sport'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img src={ground} alt="back" className='' width="70%" />
            </div>
            <div className='col-md-6'>
              <h1>Sports Verse</h1>
              <p>Can you imagine the possibility of earning massively along with enjoying a captivating cricket match? Well, you don't have to imagine it anymore because we have made it into a reality.Founded by Metalok, Sportsverse is a decentralized gaming platform for your favourite sports made to change and enhance the way fans experience them. A team of enthusiastic Technology and Business developers in the field of Blockchain and Cryptocurrency have created this version of sports that allows fans to earn money while watching/supporting their favourite team/player. </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  )
}

import React from 'react'
import cube from "../assets/templedao.png"
import "../stylesheets/metalok.css" 




export const Cube = () => {
  return (
    <div>
        <section className='sport'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <h1>Meta Influence .</h1>
              <p>The plan is on creating our own Meta Influencers for Metalok with their own backstories and personalities. They will have a celebrity-like status and will have a large following and influence. They would serve as a great attraction for out Metaverse stadium and also other metaverse projects where we will offer people the chance to have a 'meet n greet' session. Further, for our future projects as well we'll be able to have some use-case for them. </p>
            </div>
            <div className='col-md-6'>
              <img src={cube} alt="back" className='' width="70%" />
            </div>
          </div>
        </div>
     </section>
    </div>
  )
}

import React from 'react'
import './banner.css'
import img1 from '../../../assets/image/Rectangle 28.png'
import img2 from '../../../assets/image/Rectangle 29.png'

const Banner = () => {
  return (
    <div>
       <div class="container">
        <div class="row align-items-center">
            <div class="col-lg-6 col-sm-12 order-lg-1  order-2 ">
                <div class="hero-left">
                    <h1 > Discover a hassle free way to sell your flat quickly</h1>
                    <p >lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. </p>
                    <button class="btn">See more</button>
                </div>
            </div>
            <div class="col-lg-6 col-sm-12 order-lg-2 order-1 ">
                <div class="banner_right">
                   
                  <img src={img1} className="back_image" alt=""/>
                    <img src={img2} className="front_image" alt=""/> 
                </div>
            </div>
        </div>
    </div>
      </div>
      
  )
}

export default Banner

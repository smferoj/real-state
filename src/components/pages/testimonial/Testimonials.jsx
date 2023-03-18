import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

import './testimonials.css';

import { Data } from './Data';
const Testimonials = () => {
  return (
    <section className="testimonial container section">
        <h2 className="section_title">My Clients Say</h2>
      <h4 className="section_subtitle">Testimonial</h4>
      <Swiper className="testimonial_container"
       autoLoop={true}
       spaceBetween={24}
       grabCursor={true}
       pagination={{
         clickable: true,
       }}
       breakpoints={{
         576: {
           slidesPerView: 2,
         },
         768: {
           slidesPerView: 3,
           spaceBetween: 18,
         },
        
       }}
       modules={[Pagination]}
      >
      {
      Data.map(({id,  image, title, description})=>{
            
         return(
           <SwiperSlide className='testimonial_card' key={id}>
               <img src={image} alt="" className='testimonial_img'/>
               <h3 className="testimonial_name"> {title} </h3>
               <p className="testimonial_description">
                {description}
               </p>

           </SwiperSlide>
         )

      })
      
      }
      </Swiper>
    </section>
  )
}

export default Testimonials
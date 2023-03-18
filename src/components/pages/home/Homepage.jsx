import React from 'react'
 
import Banner from '../bannar/Banner'
import ContactPage from '../contact/Contactpage'
import Facilities from '../facilities/Facilities'
import Productpage from '../product/Productpage'
import Testimonials from '../testimonial/Testimonials'

const Homepage = () => {
  return (
    <div>
      <Banner/>
      <Facilities/>
      <Productpage/>
      <Testimonials/>
      <ContactPage/>
    </div>
  )
}

export default Homepage

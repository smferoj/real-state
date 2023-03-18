import React from 'react';
import{FaArrowRight} from 'react-icons/fa';
import {motion} from 'framer-motion';

const Items = ({projectItems}) => {
  return (
     <>
     {
      projectItems.map((projectItem)=>{
        const {id, img, category, title, address, beds, baths, area, carparking } = projectItem;
        return(
          < motion.div
          layout
          animate={{opacity:1, scale:1 }}
          initial={{opacity:0.8, scale:0.6 }}
          exit ={{opacity:0.8, scale:0.6}}
          transition={{duration:0.3}}
          className="product_container card card-two" key={id}
          >
            <div className="product_img-wrapper">
              <img src={img} alt="" className="product_img" />
              <span className="product_category text-cs">{category}</span>
              <h3 className="product_title">{title}</h3>
             
              <p className="decription-text">Address: {address}</p>
              <div className="description">
              <p className="decription-text"> *Beds:{beds}</p>
              <p className="decription-text">*Baths: {baths}</p>
              <p className="decription-text">*Area: {area}</p>
              <p className="decription-text"> *Parking:{carparking}</p>
              </div>
              
              <a href="" className="link">
                See Pricing 
                <FaArrowRight className='link_icon'></FaArrowRight>
              </a>
              
            </div>
          </motion.div>
        )
      })
     }
     </>
  )
}

export default Items
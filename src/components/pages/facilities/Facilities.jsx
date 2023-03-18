import React from 'react'
import './Facilities.css'
import f1 from '../../../assets/svg/hq.svg'
import f2 from '../../../assets/svg/Bp.svg'
import f3 from '../../../assets/svg/EI.svg'
import f4 from '../../../assets/svg/hs.svg'
const Facilities = () => {
  return (
    <div className="facilities">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-3 col-md-6 text-center facility">
            <img src={f1} alt="" />
            <h2>High Quality</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              architecto dignissimos dolorem natus nisi perspiciatis quasi
              deleniti pariatur consectetur earum.
            </p>
          </div>
          <div className="col-12 col-lg-3 col-md-6 text-center facility">
            <img src={f2} alt="" />
            <h2>Best Price</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              architecto dignissimos dolorem natus nisi perspiciatis quasi
              deleniti pariatur consectetur earum.
            </p>
          </div>
          <div className="col-12 col-lg-3 col-md-6 text-center facility">
            <img src={f3} alt="" />
            <h2>Easy Installment</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              architecto dignissimos dolorem natus nisi perspiciatis quasi
              deleniti pariatur consectetur earum.
            </p>
          </div>
          <div className="col-12 col-lg-3 col-md-6 text-center facility">
            <img src={f4} alt="" />
            <h2>High Security</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              architecto dignissimos dolorem natus nisi perspiciatis quasi
              deleniti pariatur consectetur earum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facilities

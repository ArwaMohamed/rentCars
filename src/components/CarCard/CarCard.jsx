// eslint-disable-next-line no-unused-vars
import React from 'react'
import style from "./CarCard.module.css"
import  star from "../../assets/imges/card/star.png";
import  person from "../../assets/imges/card/user.png";
import  gear from "../../assets/imges/card/Frame.png";
import  snow from "../../assets/imges/card/snow.png";
import  door from "../../assets/imges/card/doors.png";

export default function CarCard(props) {
  let {car} = props
  return (
    <>
       <div className={`card ${style.cardCustom}`}>
            <img
                src={car?.image} 
                alt="Audi R8"
                className={`card-img-top ${style.carImage}`}
            />
            <div className="card-body">
                <h5 className="card-title mb-1">{car?.car}</h5>
                <div className={`${style.rating}`}>
                    <img src={star} />
                    <span className='px-1'>4.6</span>
                    <span className="text-muted">(1,936 reviews)</span>
                </div>
                <div className={`${style.cardDetails} row gy-3`}>
                    <div className='col-md-6'><img src={person} /> 2 Passengers</div>
                    <div className='col-md-6'><img src={gear} /> Auto</div>
                    <div className='col-md-6'><img src={snow} /> Air Conditioning</div>
                    <div className='col-md-6'><img src={door} /> 2 Doors</div>
                </div>
                <hr/>
                <div className={`mb-3 d-flex justify-content-between `}>
                  <span className='text-muted'>Price</span>
                  <p>
                    <span className={`${style.price}`} > {car?.price}</span>
                    <span className='text-muted'>/day</span>
                  </p>
                 
                  
                  </div>
                <a  className={`btn btn-primary ${style.rentNowBtn}`}>Rent Now →</a>
            </div>
        </div>
    </>
  )
}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import style from "./CarDetails.module.css";
import person from "../../assets/imges/card/user.png";
import gear from "../../assets/imges/card/Frame.png";
import snow from "../../assets/imges/card/snow.png";
import door from "../../assets/imges/card/doors.png";
import yellowCar from "../../assets/imges/landing-page/image 11.png";
import greenCar from "../../assets/imges/landing-page/car1.png";
import graCar from "../../assets/imges/landing-page/car2.png";
import blueCar from "../../assets/imges/landing-page/car3.png";
export default function CarDetails() {
  let [car, setCar] = useState();
  let params = useParams();
  console.log(params?.id);

  let getCarById = async () => {
    try {
      let slug = `https://myfakeapi.com/api/cars/${params?.id}`;
      let { data } = await axios.get(slug);
      let carColor = data?.Car?.car_color.toLowerCase();
      let newData = {
        image:
          carColor === "yellow"
            ? yellowCar
            : carColor === "violet"
            ? blueCar
            : carColor === "red"
            ? graCar
            : carColor === "maroon"
            ? greenCar
            : blueCar,
        ...car,
      };
      setCar(newData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getCarById();
  }, []);
  return (
    <>
      <section className={`${style.chooseUs} d-flex my-5 py-5 container`}>
        <div className="d-md-flex align-items-center w-50 d-none">
          <img src={car?.image} alt="car" className="w-100" />
        </div>
        <div className="mx-5">
          <button className={`${style.popularBtn} rounded-2`}>
            WHY CHOOSE US
          </button>
          <h4 className="my-5">
            We offer the best experience with our rental deals
          </h4>
        <div className="d-flex flex-column mt-5">
          <div className="mt-3">
            <img src={person} /> 2 Passengers
          </div>
          <div className="mt-3">
            <img src={gear} /> Auto
          </div>
          <div className="mt-3">
            <img src={snow} /> Air Conditioning
          </div>
          <div className="mt-3">
            <img src={door} /> 2 Doors
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

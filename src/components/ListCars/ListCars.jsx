import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./ListCars.module.css";
import yellowCar from "../../assets/imges/landing-page/image 11.png";
import greenCar from "../../assets/imges/landing-page/car1.png";
import graCar from "../../assets/imges/landing-page/car2.png";
import blueCar from "../../assets/imges/landing-page/car3.png";
import { useNavigate } from "react-router-dom";
import CarCard from "../CarCard/CarCard";
import Pagination from "../Pagination/Pagination";
export default function ListCars() {
  let [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  let navigate = useNavigate();
  let getAllCars = async () => {
    try {
      let slug = `https://myfakeapi.com/api/cars/`;
      let { data } = await axios.get(slug);
      setCars(
        data?.cars?.map((car) => {
          let carColor = car?.car_color.toLowerCase();
          return {
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
        })
      );
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllCars();
  }, []);
  const totalPages = Math.ceil(cars.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const currentCars = cars.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
      <div className="container mt-5">
        <span className="text-muted">Home / cars</span>
        <div className="mt-3 text-center ">
          <button className={`${style.popularBtn} rounded-2`}>
            POPULAR RENTAL DEALS
          </button>
          <h1 className="text-center m-4">Most popular cars rental deals</h1>
        </div>
        <div className="container">
          <div className="row gy-4">
            {currentCars.map((car) => (
              <div
                className="col-md-3 col-sm-6"
                key={car?.id}
                onClick={() => navigate(`${car?.id}`)}
              >
                <CarCard car={car} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="my-5">
        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
}

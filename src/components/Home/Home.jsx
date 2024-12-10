import NavBar from "../NavBar/NavBar";
import style from "./Home.module.css";
import carImage from "./../../assets/imges/landing-page/car 2 1.png";
import SearchInput from "../SearchInput/SearchInput";
import { useEffect, useState } from "react";
import axios from "axios";
import CarCard from "../CarCard/CarCard";
import locationImage from "../../assets/imges/landing-page/location.png";
import carIcon from "../../assets/imges/landing-page/car-icon.png";
import jaguar from "../../assets/imges/landing-page/jaguar.png";
import nissan from "../../assets/imges/landing-page/nissan.png";
import volvo from "../../assets/imges/landing-page/volvo.png";
import audi from "../../assets/imges/landing-page/audi.png";
import car from "../../assets/imges/landing-page/sec-5/Audi 1.png";
import userIcon from "../../assets/imges/landing-page/sec-5/user.png";
import messageIcon from "../../assets/imges/landing-page/sec-5/message.png";
import chatIcon from "../../assets/imges/landing-page/sec-5/chat.png";
import person1 from "../../assets/imges/landing-page/sec-6/Rectangle 8 (1).png";
import person2 from "../../assets/imges/landing-page/sec-6/girl.png";
import star from "../../assets/imges/card/star.png";
import andriod from "../../assets/imges/landing-page/andriod.png";
import ios from "../../assets/imges/landing-page/ios.png";
import iPhoneImg from "../../assets/imges/landing-page/sec-7/iPhone-14.png";
import yellowCar from "../../assets/imges/landing-page/image 11.png";
import greenCar from "../../assets/imges/landing-page/car1.png";
import graCar from "../../assets/imges/landing-page/car2.png";
import blueCar from "../../assets/imges/landing-page/car3.png";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


export default function Home() {
  // eslint-disable-next-line no-unused-vars
  let navigate = useNavigate(); 
  let [search, setSearch] = useState("");
  let [cars, setCars] = useState([]);
  let onSearch = (searchValue) => {
    setSearch(searchValue);
  };

  let getAllCars = async () => {
    try {
      let slug =`https://myfakeapi.com/api/cars/`;
      let { data } = await axios.get(slug);
      setCars(
        processCarData(data?.cars || [])
      );
    } catch (error) {
      console.log(error);
    }
  };
  let getCarsByName = async ()=>{
    try {
      let slug =`https://myfakeapi.com/api/cars/name/${search}`;
      let { data } = await axios.get(slug);
      setCars(
        processCarData(data?.Cars || []) 
      )
    } catch (error) {
      console.log(error);
    }
   
  }
 let processCarData = (cars) => {
    return cars?.map((car) => {
      const carColor = car?.car_color?.toLowerCase();
      const carImage = {
        yellow: yellowCar,
        violet: blueCar,
        red: graCar,
        maroon: greenCar,
      }[carColor] || blueCar;
  
      return {
        image: carImage,
        ...car,
      };
    });
  };
  useEffect(() => {
    search?
    getCarsByName():getAllCars()
  }, [search]);
  return (
    <>
      <div className={`container-fluid ${style.homeContainer}`}>
        <NavBar />
        <div className="d-flex justify-content-center align-items-center pt-5">
          <div className={`${style.info} w-25 ms-5`}>
            <h1 className="fw-bold">
              Find, book and rent a car
              <span className={`${style.headerSpan}`}> Easily </span>
            </h1>
            <p>
              Get a car wherever and whenever you need it with your IOS and
              Android device.
            </p>
          </div>
          <div className="w-75 d-flex justify-content-end">
            <img src={carImage} alt="car" className={`${style.carImage}`} />
          </div>
        </div>
        <section>
          <SearchInput onSearch={onSearch} />
          <div className="d-flex justify-content-center m-4">
            <button className={`${style.popularBtn} rounded-2`}>
              POPULAR RENTAL DEALS
            </button>
          </div>
          <h1 className="text-center m-4">Most popular cars rental deals</h1>
          <div className="container">
            <div className="row ">
              {cars.slice(0, 4).map((car) => (
                <div className="col-md-3 col-sm-6" key={car?.id}  onClick={() => navigate(`cars/${car?.id}`)}>
                  <CarCard car={car} />
                </div>

              ))}
            </div>
          </div>
          <div className="d-flex justify-content-center my-5">
            <button  type="button" className="btn btn-outline-secondary px-5">
              <Link to='/cars' className={`${style.link}`}>
              Show all vehicles
              <i className="px-2 fas fa-long-arrow-alt-right"></i>
              </Link>
            </button>
          </div>
        </section>
        <section className="my-5">
          <div className="d-flex justify-content-center m-4 pt-5">
            <button className={`${style.popularBtn} rounded-2`}>
              HOW IT WORK
            </button>
          </div>
          <h1 className="text-center m-4">Most popular cars rental deals</h1>
          <div className="row justify-content-center">
            <div
              className={`${style.dealCard} col-md-4 col-sm-12 d-flex flex-column align-items-center px-4 mx-4 my-2`}
            >
              <div>
                <img src={locationImage} />
              </div>
              <h5 className="my-2">Choose location</h5>
              <small className="text-muted text-center">
                Choose your and find your best car
              </small>
            </div>
            <div
              className={`${style.dealCard} col-md-4 col-sm-12 d-flex flex-column align-items-center px-4 mx-4 my-2`}
            >
              <div>
                <img src={carIcon} />
              </div>
              <h5 className="my-2">Pick-up date</h5>
              <small className="text-muted text-center">
                Select your pick up date and time to book your car
              </small>
            </div>
            <div
              className={`${style.dealCard} col-md-4 col-sm-12 d-flex flex-column align-items-center px-4 mx-4 my-2`}
            >
              <div>
                <img src={locationImage} />
              </div>
              <h5 className="my-2">Book your car</h5>
              <small className="text-muted text-center">
                Book your car and we will deliver it directly to you
              </small>
            </div>
          </div>
        </section>
        <section className="container px-4 d-flex justify-content-around flex-wrap my-5">
          <img src={jaguar} className="mx-2" />
          <img src={nissan} className="mx-2" />
          <img src={volvo} className="mx-2" />
          <img src={audi} className="mx-2" />
        </section>
        <section className={`${style.chooseUs} d-flex my-5 py-5 `}>
          <div className="d-md-flex align-items-center w-50 d-none">
            <img src={car} alt="car" />
          </div>
          <div>
            <div>
              <button className={`${style.popularBtn} rounded-2`}>
                WHY CHOOSE US
              </button>
              <h4 className="my-3">
                We offer the best experience with our rental deals
              </h4>
            </div>
            <div className="d-flex align-items-center">
              <img src={userIcon} className="p-3 ps-0" />
              <article>
                <h6 className="mb-0">Best price guaranteed</h6>
                <small>
                  Find a lower price? We’ll refund you 100% of the difference.
                </small>
              </article>
            </div>
            <div className="d-flex align-items-center">
              <img src={userIcon} className="p-3 ps-0" />
              <article>
                <h6 className="mb-0">24 hour car delivery</h6>
                <small>
                  Book your car anytime and we will deliver it directly to you.
                </small>
              </article>
            </div>
            <div className="d-flex align-items-center">
              <img src={messageIcon} className="p-3 ps-0" />
              <article>
                <h6 className="mb-0">Best price guaranteed</h6>
                <small>
                  Find a lower price? We’ll refund you 100% of the difference.
                </small>
              </article>
            </div>
            <div className="d-flex align-items-center">
              <img src={chatIcon} className="p-3 ps-0" />
              <article>
                <h6 className="mb-0">24/7 technical support</h6>
                <small>
                  Have a question? Contact Rentcars support any time when you
                  have problem.
                </small>
              </article>
            </div>
          </div>
        </section>
        <section className="sec-6 pb-5">
          <div className="d-flex flex-column mt-5">
            <button className={`${style.popularBtn} rounded-2 m-auto mt-5`}>
              TEST IMONIALS
            </button>
            <h1 className="text-center m-4 mb-5">
              Most popular cars rental deals
            </h1>
          </div>
          <div className="d-flex flex-wrap justify-content-around">
            <div className={`${style.card} mb-3 mx-2 shadow`}>
              <div className="row g-0 h-100">
                <div className="col-md-6">
                  <img
                    src={person1}
                    alt="..."
                    className="img-fluid rounded-start w-100 h-100"
                  />
                </div>
                <div className="col-md-6">
                  <div className={`${style.cardBody} card-body`}>
                    <h1 className="card-title mb-0">
                      5.5 <small className="h5">stars</small>
                    </h1>
                    <div>
                      <img src={star} />
                      <img src={star} />
                      <img src={star} />
                      <img src={star} />
                      <img src={star} />
                    </div>
                    <p className="card-text my-4">
                      “I feel very secure when using caretall&apos;s services.
                      Your customer care team is very enthusiastic and the
                      driver is always on time.”
                    </p>
                    <div className="card-text">
                      <p className="bold mb-0">Charlie Johnson</p>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${style.card} mb-3 mx-2 shadow`}>
              <div className="row g-0">
                <div className="col-md-6">
                  <img
                    src={person2}
                    alt="..."
                    className="img-fluid rounded-start w-100"
                  />
                </div>
                <div className="col-md-6">
                  <div className={`${style.cardBody} card-body`}>
                    <h1 className="card-title mb-0">
                      5.5 <small className="h5">stars</small>
                    </h1>
                    <div>
                      <img src={star} />
                      <img src={star} />
                      <img src={star} />
                      <img src={star} />
                      <img src={star} />
                    </div>
                    <p className="card-text my-4">
                      “I feel very secure when using caretall&apos;s services.
                      Your customer care team is very enthusiastic and the
                      driver is always on time.”
                    </p>
                    <div className="card-text">
                      <p className="bold mb-0">Charlie Johnson</p>
                      <small className="text-muted">
                        Last updated 3 mins ago
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="sec-7 d-flex mt-5 justify-content-around">
          <div>
            <div className="mx-5">
              <h1 className="fw-bold">
                Download Rentcars App for
                <span className={`${style.headerSpan}`}> FREE </span>
              </h1>
              <small>For faster, easier booking and exclusive deals.</small>
              <div className="my-3 my-3 col-md-7 d-flex justify-content-center" />
              <img src={andriod} className="me-2" />
              <img src={ios} />
              <form className="d-flex flex-column col-md-7 my-3">
                <input
                  type="text"
                  placeholder="Name"
                  className={`${style.contactUs} my-1 px-3 ng-untouched ng-pristine ng-valid`}
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className={`${style.contactUs} my-1 px-3 ng-untouched ng-pristine ng-valid`}
                />
                <input
                  type="text"
                  placeholder="Email"
                  className={`${style.contactUs} my-1 px-3 ng-untouched ng-pristine ng-valid`}
                />
                <div className="d-flex justify-content-center my-2">
                  <button
                    type="submit"
                    id="button-addon2"
                    className="btn bold btn-primary px-5"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="d-md-flex justify-content-center align-items-end d-none">
            <img src={iPhoneImg} alt="" className={`${style.mobileImg}`} />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

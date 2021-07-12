import React, { useEffect, useState } from "react";
import "./HouseDetails.style.css";
import axios from "../../axios";
import { useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import imageOne from "../../components/resources/images/Rectangle 407.png";
import imageTwo from "../../components/resources/images/Rectangle 408.png";
import imageThree from "../../components/resources/images/Rectangle 409.png";
import imageFour from "../../components/resources/images/Rectangle 410.png";
// import Axios from "axios";

function HouseDetails() {
  const [house, setHouse] = useState({});
  const id = useParams().id;
  // console.log(house);

  useEffect(() => {
    axios
      .get(`/api/services/${id}`)
      .then((response) => {
        setHouse(response.data);
      })
      .catch((err) => alert(err.message));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const username = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
    let status = "pending";
    // console.log(email, username, phone, message, status);
    axios.post("/api/booking", {
      email,
      username,
      phone,
      message,
      status,
      service: house,
    })
      .then((response) => {
        alert(response.data);
        document.getElementById("email").value = '';
        document.getElementById("name").value = '';
        document.getElementById("phone").value = '';
        document.getElementById("message").value = '';
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="houseDetails">
      <Banner>
       <div className="pt-5">
       <h1 className='pt-5' style={{fontSize:"50px", fontWeight:"700"}}>Apartment</h1>
       </div>
      </Banner>
      <div className="container">
        <div className="row">
          <div className="col-md-8 pb-5">
            <img className="img-fluid my-3" src={house.image} alt="" />
            <div className="row mt-3">
              <div className="col-md-3">
                <img className="img-fluid mb-3" src={imageOne} alt="" />
              </div>
              <div className="col-md-3">
                <img className="img-fluid mb-3" src={imageTwo} alt="" />
              </div>
              <div className="col-md-3">
                <img className="img-fluid mb-3" src={imageThree} alt="" />
              </div>
              <div className="col-md-3">
                <img className="img-fluid mb-3" src={imageFour} alt="" />
              </div>
            </div>
            <div className="title d-flex justify-content-between mt-4">
              <h4>{house.title}</h4>
              <h4>${house.price}</h4>
            </div>

            <div className="my-2">
              <span>3000 sq-ft.,</span> <span>{house.location}</span>{" "}
              <span>{house.bedroom} Bedroom</span>{" "}
              <span>{house.bathroom} Bathroom</span>
            </div>

            <div className="price">
              <h4>Price Details-</h4>
              <p>
                <small>Rent/Month: $550 (negotiable)</small>
              </p>
              <p>
                <small>
                  Service Charge : 8,000/= Tk per month, subject to change
                </small>
              </p>
              <p>
                <small>Security Deposit : 3 month’s rent</small>
              </p>
              <p>
                <small>Rent/Month: $550 (negotiable)</small>
              </p>
            </div>
            <div className="property">
              <h4>Property Details-</h4>
              <p>
                <small>
                  Address & Area : Rangs Malancha, House-68, Road-6A (Dead End
                  Road), Dhanmondi Residential Area.
                </small>
              </p>
              <p>
                <small>Flat Size : 3000 Sq Feet.</small>
              </p>
              <p>
                <small>
                  Floor : A5 (5th Floor) (6 storied Building ) (South Facing
                  Unit) Room Category : 3 Large Bed Rooms with 3 Verandas,
                  Spacious Drawing, Dining & Family Living Room, Highly
                  Decorated Kitchen with Store Room and Servant room with
                  attached Toilet.
                </small>
              </p>
              <p>
                <small>
                  Facilities : 1 Modern Lift, All Modern Amenities & Semi
                  Furnished. Additional Facilities : a. Electricity with full
                  generator load, b. Central Gas Geyser, c. 2 Car Parking with 1
                  Driver’s Accommodation, d. Community Conference Hall, e. Roof
                  Top Beautified Garden and Grassy Ground, f. Cloth Hanging
                  facility with CC camera
                </small>
              </p>
            </div>
          </div>
          <div className="col-md-4 p-3">
            <form
              className=" text-center submitForm p-5"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  className="form-control"
                  id="name"
                />
              </div>
              <div className="form-group">
                <input
                  type="phone"
                  placeholder="Phone No"
                  name="phone"
                  className="form-control"
                  id="phone"
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Address"
                  name="email"
                  className="form-control"
                  id="email"
                />
              </div>
              <div className="form-group">
                <textarea
                  name="Message"
                  id="message"
                  placeholder="message"
                  cols="10"
                  className="form-control"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" className="btn">
                Request Booking
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HouseDetails;

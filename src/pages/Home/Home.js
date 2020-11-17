import React, { useState } from "react";
import Banner from "../Banner/Banner";
import BannerFooter from "../BannerFooter/BannerFooter";
import BookingAppartment from "../BookingAppartment/BookingAppartment";
import Footer from "../Footer/Footer";
import Services from "../Services/Services";

const Home = () => {
  const [search, setSearch] = useState('');
  const [searchText, setSearchText] = useState('');
  return (
    <div>
      <Banner>
        <div className="banner-main">
          <h1 className="pb-3">FIND YOUR HOUSE RENT</h1>
          <form class="form-inline d-flex justify-content-center align-items-center">
            <div class="form-group mx-sm-3 mb-2">
              <label for="inputPassword2" class="sr-only">
                Search Item
              </label>
              <input
              onChange={(e) =>setSearch(e.target.value)}
                type="text"
                class="form-control"
                id="inputPassword2"
                placeholder="Search..."
              />
            </div>
            <button onClick={() =>setSearchText(search)} type="submit" class="btn btn-primary mb-2">
              Find Now
            </button>
          </form>
        </div>
      </Banner>
      <BannerFooter></BannerFooter>
      <BookingAppartment search={searchText.toLowerCase()}></BookingAppartment>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;

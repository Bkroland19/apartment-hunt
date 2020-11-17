import React from "react";
import "./banner.css";

const Banner = (props) => {
  return (
    <section className='section'>
      <div className="banner-bg">
        <div className="banner-bg-black">
          <div className="container">
            <div className="row pt-5">
              <div className="col-md-12 text-center">
                {
                  props.children
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
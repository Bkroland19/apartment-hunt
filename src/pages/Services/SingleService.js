import React from "react";

const SingleService = (props) => {
  //   console.log(props.service);
  const {title, description, img } = props.service;

  return (
    <div className="singleService">
      <div className="col-md-4 col-sm-12 text-center align-items-center mx-auto">
        <div className="card" style={{ width: "18rem" }}>
          <img className="" src={img} alt="" />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleService;

import React from "react";
import apartment from "../../components/resources/logos/apartment 1.png";
import affordable from "../../components/resources/logos/affordable 1.png";
import lessee from "../../components/resources/logos/lessee 1.png";
import SingleService from "./SingleService";

const allServices = [
  {
    id: "01",
    img: apartment,
    title: "Wide Range of Properties",
    description:
      "With a robust selection of popular properties on hand, as well as leading properties from experts.",
  },
  {
    id: "02",
    img: affordable,
    title: "Financing Made Easy",
    description:
      "Our stress-free finance department that can find financial solutions to save you money.",
  },
  {
    id: "03",
    img: lessee,
    title: "Trusted by Thousands",
    description:
      "10 new offers every day. 350 offers on site, trusted by a community of thousands of users.",
  },
];

const Services = () => {
  return (
    <div className="service">
      <div className="container my-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <div className="services">
              <p>Service</p>
              <h3>
                We're an agency tailored to all <br /> clients' needs that
                always delivers
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          {allServices.map((service) => (
            <SingleService service={service} key={service.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

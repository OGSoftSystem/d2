import React from "react";

const AboutPage = () => {
  return (
    <div className="space-y-10 md:flex justify-between">
      <div className="card md:w-5/12 h-fit space-y-6">
        <h2 className="card-title">About</h2>

        <h3 className="card-subtitle">
          We&apos;re Changing the Way the World Thinks About Information D² is a
          bespoke due diligence firm that has been operating globally since
          2016.
        </h3>

        <p className="card-description">
          We conduct discreet background enquiries and investigations, providing
          clients with detailed and valuable reporting to manage risk and
          protect interests
        </p>
      </div>

      <div className="card md:w-5/12 h-fit md:absolute md:bottom-0 right-0 space-y-6">
        <h2 className="card-title">Capacity</h2>

        <h3 className="card-subtitle">
          We Deliver Exceptional Services Around the World
        </h3>
      </div>
    </div>
  );
};

export default AboutPage;

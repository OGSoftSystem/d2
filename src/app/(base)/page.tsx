import AboutPage from "@/components/about-page";
// import ContactPage from "@/components/contact-page";
import Investigation from "@/components/investigation-page";
import LandingPage from "@/components/landing-page";
import MaxWidthContainer from "@/components/max-width-container";
import React from "react";

const Home = () => {
  return (
    <>
      <LandingPage />

      <div className="about-image paddingY">
        <MaxWidthContainer className="relative">
          <AboutPage />
        </MaxWidthContainer>
      </div>

      <Investigation />

      {/* <div className="contact-image paddingY">
        <MaxWidthContainer className="md:flex md:justify-end  ">
          <ContactPage />
        </MaxWidthContainer>
      </div> */}
    </>
  );
};

export default Home;

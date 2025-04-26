import React from "react";
import MaxWidthContainer from "./max-width-container";
import Image from "next/image";

const LandingPage = () => {
  return (
    <MaxWidthContainer className="flex flex-col items-center">
      <div className="relative w-full overflow-hidden h-[400px] md:h-[1000px] mx-auto flex items-center justify-center ">
        <Image
          src={"/img/banner.png"}
          fill
          alt="banner"
          className="object-contain"
        />

        <h1 className="text-primary-background z-10 text-center text-2xl md:text-6xl italic uppercase font-bold">
          corporate intelligence <br /> and due diligence
        </h1>
      </div>

      <div className="absolute top-7 md:top-12 ">
        <div className="relative w-[100px] h-[100px] md:w-[150px] md:h-[150px] ">
          <Image src={"/img/d2-logo.svg"} fill alt="logo" />
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default LandingPage;

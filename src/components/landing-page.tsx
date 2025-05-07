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
          priority
        />

        <h1 className="text-primary-background z-10 text-center text-2xl md:text-6xl italic uppercase font-bold">
          corporate intelligence <br /> and due diligence
        </h1>
      </div>

      <div className="absolute top-8 md:top-12">
        <div className="relative w-[100px] h-[100px] md:w-[120px] md:h-[120px] xl:w-[150px] xl:h-[150px] 2xl:w-[180px] 2xl:h-[180px]">
          <Image src={"/img/d2-logo.svg"} fill alt="logo" priority />
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default LandingPage;

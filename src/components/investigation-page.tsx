import Image from "next/image";
import React from "react";
import { Separator } from "./ui/separator";

const Investigation = () => {
  return (
    <div className="flex justify-between">
      <div className="px-6 mx-auto">
        <Item
          title="INVESTIGATION"
          description=" Our investigative team hails from law enforcement, government and
            the financial sector."
          showSeparator
        />
        <Item
          title="DUE DILIGENCE"
          description=" Our due diligence is based on an extensive global human resource
            network, comprehensive open- source research, experience, and local
            and industry knowledge."
          showSeparator
        />
        <Item
          title="ANALYSIS"
          description="  Our investigations and analysis assist firms to make strategic
            fact-based decisions with maximum insight."
          showSeparator={false}
        />
      </div>

      <div className="hidden md:block">
        <div className="relative w-[700px] h-[500px]">
          <Image src={"/img/1.png"} fill alt="banner-1" className="w-6/12" />
        </div>
        <div className="relative w-[700px] h-[500px]">
          <Image src={"/img/2.png"} fill alt="banner-2" className="w-6/12" />
        </div>
        <div className="relative w-[700px] h-[500px]">
          <Image src={"/img/3.png"} fill alt="banner-3" className="w-6/12" />
        </div>
      </div>
    </div>
  );
};

export default Investigation;

function Item({
  title,
  description,
  showSeparator,
}: {
  title: string;
  description: string;
  showSeparator: boolean;
}) {
  return (
    <>
      <div className="space-y-6 p-10 paddingY w-full flex flex-col  md:w-[30rem]">
        <h1 className="inv-title pt-10">{title}</h1>

        <p className="inv-description">{description}</p>
      </div>
      {showSeparator && <Separator className="bg-black md:mt-10" />}
    </>
  );
}

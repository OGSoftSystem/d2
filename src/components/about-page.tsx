import { cn } from "@/lib/utils";
import React from "react";

const AboutPage = () => {
  return (
    <div className="space-y-10 md:flex justify-between">
      <Card
        title="About"
        subtitle="  We're Changing the Way the World Thinks About Information D² is a
          bespoke due diligence firm that has been operating globally since
          2016."
        description="We conduct discreet background enquiries and investigations, providing
          clients with detailed and valuable reporting to manage risk and
          protect interests"
      />

      <Card
        className="md:absolute md:bottom-0 right-0 space-y-6"
        title="Capacity"
        subtitle="We Deliver Exceptional Services Around the World"
      />

    </div>
  );
};

export default AboutPage;

function Card({
  title,
  subtitle,
  description,
  className,
}: {
  title: string;
  subtitle: string;
  description?: string;
  className?: string;
}) {
  return (
    <div className={cn("card md:w-5/12 h-fit space-y-6", className)}>
      <h2 className="card-title">{title}</h2>

      <h3 className="card-subtitle">{subtitle}</h3>

      <p className="card-description">{description}</p>
    </div>
  );
}

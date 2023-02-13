import { servicesData, companyQualitiesData } from "data";

import { Hero, CompanyQualities, Services } from "@components/common";
import { ServiceArea } from "./ServiceArea/ServiceArea";

export const ServicesPage = () => {
  return (
    <>
      <Hero
        image={{
          src: "/images/hero-images/service-page-img.webp",
          alt: "Service page image for Ultimate Design Flow website",
        }}
        containerSize="sm"
        infoBlock={{
          headline: "Our Exclusive Jobs",
          paragraph:
            "Trust Our Professional Upholstery Team to Revitalize Your Home",
        }}
      />

      {/* Services provided by the business*/}
      <Services
        title="Our Services"
        headline="Transform your furniture vision into reality"
        services={servicesData}
      />

      {/* Why choosing this business */}
      <CompanyQualities
        containerTitle="Why Us"
        containerHeadline="Find Out Why Our Upholstery Services Stand Out"
        qualities={companyQualitiesData}
      />

      {/* Service Area */}
      <ServiceArea />
    </>
  );
};

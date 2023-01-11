import { servicesData, companyQualities } from "../../data";
import Services from "../Services/Services";
import CompanyQualities from "../CompanyQualities/CompanyQualities";
import ServiceArea from "../ServiceArea/ServiceArea";
import { Hero } from "../Global";

const ServicesPage = () => {
  return (
    <>
      <Hero
        image={{
          src: "/assets/hero-images/service-page-img.webp",
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
      <CompanyQualities qualities={companyQualities} />

      {/* Service Area */}
      <ServiceArea />
    </>
  );
};

export default ServicesPage;

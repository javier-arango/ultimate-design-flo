import styles from "./ServicesPage.module.css";

import { servicesData, companyQualities } from "../../data";
import { IconCard, InfoBlock } from "../Global";
import Services from "../Services/Services";
import CompanyQualities from "../CompanyQualities/CompanyQualities";
import ServiceArea from "../ServiceArea/ServiceArea";

const ServicesPage = () => {
  return (
    <>
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

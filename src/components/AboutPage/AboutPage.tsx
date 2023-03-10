import { IIconCard } from "lib";
import { aboutTheCompanyData } from "data";
import { calculateYearsInBusiness } from "utils";

import { Testimonials } from "./Testimonials/Testimonials";
import { Hero, InfoBlock, CompanyQualities } from "@components/common";

const qualities: IIconCard[] = [
  {
    iconName: "calendar",
    title: `${calculateYearsInBusiness(aboutTheCompanyData.yearFounded)}+`,
    description: "Years in Business",
  },
  {
    iconName: "person",
    title: `${aboutTheCompanyData.numOfCustomers}+`,
    description: "Happy Customers",
  },
  {
    iconName: "flag",
    title: `+${aboutTheCompanyData.projectsCompleted}`,
    description: "Projects Completed",
  },
];

export const AboutPage = () => {
  const companyFounded = aboutTheCompanyData.yearFounded;
  const yearsInBusiness = calculateYearsInBusiness(companyFounded);

  return (
    <>
      <Hero
        image={{
          src: "/images/hero-images/story-page-img.webp",
          alt: "About page image for Ultimate Design Flow website",
        }}
        containerSize="sm"
        infoBlock={{
          headline: "Our Story",
          paragraph:
            "Discover the Values That Guide Our Business and Set Us Apart",
        }}
      />

      <InfoBlock
        title="About"
        headline="Ultimate Design Flo"
        paragraph={`Founded in ${companyFounded}, Ultimate Design Flo has been dedicated to providing expert furniture upholstery 
        services to customers in the Florida area for over ${yearsInBusiness} years. With a team of skilled upholsterers and a commitment 
        to quality craftsmanship, we have built a reputation for excellence within the industry. At Ultimate Design Flo, 
        we pride ourselves on our attention to detail and our ability to bring new life to your furniture. Whether you 
        want to refresh an old piece or add a custom touch to a new one, we have the skills and expertise to deliver results 
        that meet or exceed your expectations. In addition to our upholstery services, we also offer a range of fabric 
        repairs and custom cushions and pillows to help you get the perfect look for your home. No matter what your 
        furniture needs may be, we have the experience and expertise to help.`}
      />

      <CompanyQualities
        containerTitle="Discover"
        containerHeadline="More About Us"
        qualities={qualities}
      />

      <Testimonials />
    </>
  );
};

import { useRouter } from "next/router";
import {
  aboutTheCompanyData,
  featureProjectsData,
  servicesData,
} from "../../data";

import { Hero, InfoBlock } from "../Global";
import Services from "../Services/Services";
import FeatureProjects from "../FeatureProjects/FeatureProjects";
import { calculateYearsInBusiness } from "../../utils";

const HomePage = () => {
  const router = useRouter();
  const companyFounded = aboutTheCompanyData.yearFounded;
  const yearsInBusiness = calculateYearsInBusiness(companyFounded);

  return (
    <>
      {/* Hero image with title */}
      <Hero
        image={{
          src: "/images/hero-images/home-page-img.webp",
          alt: "Home page image for Ultimate Design Flow website",
        }}
        infoBlock={{
          title: "Welcome To",
          headline: "Ultimate Design Flo",
          paragraph:
            "Upgrade your home's style with our furniture makeover magic!",
          button: {
            label: "Contact Now",
            onClick: () => router.push("/contact"),
          },
        }}
      />

      {/* Little story about the business */}
      <InfoBlock
        headline="Our Story"
        paragraph={`Founded in ${companyFounded}, Ultimate Design Flo has been dedicated to providing
          expert furniture upholstery services to customers in the Florida area
          for over ${yearsInBusiness} years. With a team of skilled upholsterers and a commitment
          to quality craftsmanship, we have built a reputation for excellence
          within the industry.`}
        button={{
          label: "Learn More",
          variant: "secondary",
          onClick: () => router.push("/about"),
        }}
      />

      {/* Services provided by the business*/}
      <Services
        title="Our Services"
        headline="Transform your furniture vision into reality"
        services={servicesData.slice(0, 3)}
        button={{
          label: "Learn More",
          variant: "secondary",
          onClick: () => router.push("/services"),
        }}
      />

      <FeatureProjects projects={featureProjectsData} />
    </>
  );
};

export default HomePage;

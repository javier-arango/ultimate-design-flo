import { IIconCard } from "../../types";
import CompanyQualities from "../CompanyQualities/CompanyQualities";
import { Hero, InfoBlock } from "../Global";
import Testimonials from "../Testimonials/Testimonials";

const qualities: IIconCard[] = [
  {
    iconName: "calendar",
    title: "8+",
    description: "Years in Business",
  },
  {
    iconName: "person",
    title: "200+",
    description: "Happy Customers",
  },
  {
    iconName: "flag",
    title: "+2190",
    description: "Projects Completed",
  },
];

const AboutPage = () => {
  return (
    <>
      <Hero
        image={{
          src: "/assets/hero-images/story-page-img.webp",
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
        paragraph="Founded in 2014, Ultimate Design Flo has been dedicated to providing expert furniture upholstery 
        services to customers in the Florida area for over 8 years. With a team of skilled upholsterers and a commitment 
        to quality craftsmanship, we have built a reputation for excellence within the industry. At Ultimate Design Flo, 
        we pride ourselves on our attention to detail and our ability to bring new life to your furniture. Whether you 
        want to refresh an old piece or add a custom touch to a new one, we have the skills and expertise to deliver results 
        that meet or exceed your expectations. In addition to our upholstery services, we also offer a range of fabric 
        repairs and custom cushions and pillows to help you get the perfect look for your home. No matter what your 
        furniture needs may be, we have the experience and expertise to help."
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

export default AboutPage;

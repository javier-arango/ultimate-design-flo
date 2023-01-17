import styles from "./Testimonials.module.css";
import { ITestimonial } from "../../lib";

import { InfoBlock } from "../Global";
import Testimonial from "./Testimonial/Testimonial";
import { testimonialsData } from "../../data";

const testimonials = testimonialsData;

const Testimonials = () => {
  if (!testimonials) return null;

  return (
    <>
      <InfoBlock title="Clients Testimonials" headline="What Our Clients Say">
        <div className={`padding-responsive ${styles.testimonials}`}>
          {testimonials.map((testimonial: ITestimonial) => (
            <Testimonial
              key={testimonial.clientName}
              clientName={testimonial.clientName}
              clientQuote={testimonial.clientQuote}
            />
          ))}
          {/* <CarouselButton /> */}
        </div>
      </InfoBlock>
    </>
  );
};

export default Testimonials;

import styles from "./Testimonials.module.css";

import { ITestimonial } from "lib";
import { testimonialsData } from "data";

import { InfoBlock } from "@components/common";

import { Testimonial } from "./Testimonial/Testimonial";

const testimonials = testimonialsData;

export const Testimonials = () => {
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
        </div>
      </InfoBlock>
    </>
  );
};

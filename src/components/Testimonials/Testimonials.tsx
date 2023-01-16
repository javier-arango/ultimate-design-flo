import styles from "./Testimonials.module.css";
import { useState, useEffect } from "react";
import { ITestimonial } from "../../lib";

import { InfoBlock, Spinner } from "../Global";
import Testimonial from "./Testimonial/Testimonial";

const Testimonials = () => {
  const [data, setData] = useState<ITestimonial[]>([] as ITestimonial[]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/testimonials")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;
  if (!data) return null;

  return (
    <>
      <InfoBlock title="Clients Testimonials" headline="What Our Clients Say">
        <div className={`padding-responsive ${styles.testimonials}`}>
          {data.map((testimonial) => (
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

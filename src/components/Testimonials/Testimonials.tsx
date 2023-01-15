import styles from "./Testimonials.module.css";

import { InfoBlock, Spinner } from "../Global";
import CarouselButton from "./CarouselButton/CarouselButton";
import Testimonial from "./Testimonial/Testimonial";
import { useState, useEffect } from "react";
import { ITestimonial } from "../../types";

const testimonialsData = {
  clientQuote:
    "I recently hired Ultimate Design Flo to reupholster my living room furniture and I couldn&apos;t be happier with the results. The team at Ultimate Design Flo was professional and efficient, and they completed the job in a timely manner. The quality of the workmanship was top-notch and the new fabric looks beautiful on my furniture. I would highly recommend Ultimate Design Flo to anyone in need of upholstery services.",
  clientName: "Melanie W.",
};

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

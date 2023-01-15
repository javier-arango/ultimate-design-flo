import styles from "./Testimonial.module.css";
import { ITestimonial } from "../../../types";

const Testimonial = ({ clientQuote, clientName }: ITestimonial) => {
  return (
    <>
      <div className={`text-align-center ${styles.testimonialContainer}`}>
        <p className="paragraph-lg">“{clientQuote}“</p>
        <p className="label-lg">{clientName}</p>
      </div>
    </>
  );
};

export default Testimonial;

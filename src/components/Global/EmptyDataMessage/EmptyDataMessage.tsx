import styles from "./EmptyDataMessage.module.css";
import InfoBlock from "../InfoBlock/InfoBlock";

const EmptyDataMessage = () => {
  return (
    <div className={`padding-responsive ${styles.container}`}>
      <InfoBlock
        headline="Website Under Construction"
        paragraph="We apologize for any inconvenience, but our website is currently
        undergoing maintenance and updates. We are working hard to improve our
        online presence and provide you with a better experience. Please check
        back soon to see our new and improved website. Thank you for your
        patience and understanding."
      />
    </div>
  );
};

export default EmptyDataMessage;

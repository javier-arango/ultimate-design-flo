import styles from "./Spinner.module.css";

const Spinner = () => {
  return (
    <>
      <div className={`padding-responsive ${styles.loaderContainer}`}>
        <div className={styles.loader} />
        <p className="paragraph-md ">Loading...</p>
      </div>
    </>
  );
};

export default Spinner;

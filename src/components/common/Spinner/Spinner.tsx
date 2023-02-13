import styles from "./Spinner.module.css";

export const Spinner = () => {
  return (
    <>
      <div className={`padding-responsive ${styles.loaderContainer}`}>
        <div className={styles.loader} />
        <p className="paragraph-md ">Loading...</p>
      </div>
    </>
  );
};

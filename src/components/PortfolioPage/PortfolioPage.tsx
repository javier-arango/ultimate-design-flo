import styles from "./PortfolioPage.module.css";
import { IFileData } from "../../lib";
import { useState, useEffect } from "react";

import Image from "next/image";
import { Container, EmptyDataMessage, Hero, Spinner } from "../Global";

const PortfolioPage = () => {
  const [data, setData] = useState<IFileData[]>([] as IFileData[]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/productImages")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <Spinner />;
  if (!data) return <EmptyDataMessage />;

  return (
    <>
      <Hero
        image={{
          src: "/assets/hero-images/portfolio-page-img.webp",
          alt: "Portfolio page image for Ultimate Design Flow website",
        }}
        containerSize="sm"
        infoBlock={{
          headline: "Our Portfolio",
          paragraph: "See the Magic of Our Upholstery Services in Action",
        }}
      />

      <Container justifyContent="center" flexDirection="column">
        <div className={`padding-responsive ${styles.gridContainer}`}>
          {data.map((file) => (
            <div key={file.name} className={styles.imgContainer}>
              <Image
                src={file.path}
                alt="Portfolio image 1"
                fill
                className={styles.imgStyle}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,LpLNiB%MkWof_NWCV@aeX9j[oJj@"
                sizes="(min-width: 66em) 33vw,
            (min-width: 44em) 50vw, 100vw"
              />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default PortfolioPage;

import styles from "./PortfolioPage.module.css";
import { Container, Hero } from "../Global";
import Image from "next/image";
import { useState, useEffect } from "react";
import { IFileData } from "../../types";

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

  if (isLoading)
    return <p className="label-responsive padding-responsive">Loading...</p>;

  if (!data)
    return (
      <p className="label-responsive padding-responsive">No product images</p>
    );

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
                sizes="(max-width: 500px) 100vw,
              (max-width: 450px) 50vw,
              33vw"
              />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

export default PortfolioPage;

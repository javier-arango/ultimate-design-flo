import styles from "./PortfolioPage.module.css";

import Image from "next/image";

import { imageData } from "data";

import { Container, EmptyDataMessage, Hero } from "@components/common";

const data: string[] = Array.from(
  { length: 23 },
  (_, i) => `/images/product-images/${i + 1}.jpeg`
);

export const PortfolioPage = () => {
  if (data.length === 0) return <EmptyDataMessage />;

  return (
    <>
      <Hero
        image={{
          src: "/images/hero-images/portfolio-page-img.webp",
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
            <div key={file} className={styles.imgContainer}>
              <Image
                src={file}
                alt={`Portfolio image ${file} | Ultimate Design Flow luxurious services`}
                fill
                className={styles.imgStyle}
                placeholder="blur"
                blurDataURL={imageData.blurDataURL}
                sizes="(max-width: 300px) 33vw,
            (max-width: 450px) 50vw, 100vw"
              />
            </div>
          ))}
        </div>
      </Container>
    </>
  );
};

import styles from "./PortfolioPage.module.css";

import Image from "next/image";
import { Container, EmptyDataMessage, Hero } from "../Global";

const data: string[] = Array.from(
  { length: 23 },
  (_, i) => `/assets/product-images/${i + 1}.jpeg`
);

const PortfolioPage = () => {
  if (data.length === 0) return <EmptyDataMessage />;

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
            <div key={file} className={styles.imgContainer}>
              <Image
                src={file}
                alt={`Portfolio image ${file} | Ultimate Design Flow luxurious services`}
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

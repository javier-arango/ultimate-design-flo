import Head from "next/head";
import { IMetaTags } from "../../lib";
import { useRouter } from "next/router";
import { defaultMetaTagsData } from "../../data";
import NavBarInfo from "../NavBarInfo/NavBarInfo";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

interface IAppContainer extends IMetaTags {
  children: JSX.Element | JSX.Element[];
}

const AppContainer = ({
  title,
  description,
  keywords,
  children,
}: IAppContainer) => {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>
          {!title
            ? defaultMetaTagsData.title
            : defaultMetaTagsData.title + " | " + title}
        </title>

        {/* Meta Tags */}
        <meta name="author" content="Javier Arango" />
        <meta
          name="description"
          content={!description ? defaultMetaTagsData.description : description}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta
          name="keywords"
          content={
            keywords
              ? [...defaultMetaTagsData.keywords!, ...keywords].join(",")
              : defaultMetaTagsData.keywords?.join(", ")
          }
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:url"
          content={defaultMetaTagsData.url + router.asPath}
        />

        {/* Open Graph Tag (OG) */}
        <meta
          property="og:title"
          content={
            !title
              ? defaultMetaTagsData.title
              : defaultMetaTagsData.title + " | " + title
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={defaultMetaTagsData.url} />
        <meta
          property="og:description"
          content={!description ? defaultMetaTagsData.description : description}
        />
        <meta property="og:site_name" content={defaultMetaTagsData.title} />

        {/* Links */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#51423B" />
        <link rel="canonical" href={defaultMetaTagsData.url + router.asPath} />
      </Head>
      <main>
        <NavBarInfo />
        <NavBar />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default AppContainer;

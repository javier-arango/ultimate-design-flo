import Head from "next/head";
import { IMetaTags } from "../../lib";
import { useRouter } from "next/router";

const defaultMetaTags: IMetaTags = {
  title: "Ultimate Design Flo",
  description:
    "Get top-quality furniture upholstery services from the skilled team at Ultimate Design Flo. With a commitment to craftsmanship and attention to detail, we can give your furniture a new lease on life.",
  keywords: [
    "Ultimate Design Flo",
    "furniture upholstery",
    "fabric repair",
    "custom cushions and pillows",
    "quality craftsmanship",
    "attention to detail",
    "furniture restoration",
    "custom furniture",
    "Florida upholstery company",
    "expert upholsterers",
    "reputation for excellence",
    "home furnishings",
    "upholstery services",
    "furniture rejuvenation",
    "custom touches",
    "new life for furniture",
    "furniture makeover",
    "furniture redesign",
    "furniture reupholstering",
    "furniture renovation",
    "furniture reimagining",
    "furniture refresh",
    "furniture revamp",
    "furniture remodel",
    "furniture rejuvenation",
    "furniture restoration services",
    "expert furniture upholsterers",
    "custom furniture solutions",
    "furniture upholstery company",
    "quality upholstery craftsmanship",
    "furniture upholstery experts",
    "furniture upholstery services provider",
    "professional furniture upholstery",
    "furniture upholstery in Florida",
    "custom furniture design",
    "furniture restoration specialist",
  ],
};

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
            ? defaultMetaTags.title
            : defaultMetaTags.title + " | " + title}
        </title>

        {/* Meta Tags */}
        <meta name="author" content="Javier Arango" />
        <meta
          name="description"
          content={!description ? defaultMetaTags.description : description}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta
          name="keywords"
          content={
            keywords
              ? [...defaultMetaTags.keywords!, ...keywords].join(",")
              : defaultMetaTags.keywords?.join(", ")
          }
        />
        <meta name="robots" content="index, follow" />
        <meta
          property="og:url"
          content={`https://ultimatedesignflo.com${router.asPath}`}
        />

        {/* Open Graph Tag (OG) */}
        <meta
          property="og:title"
          content={
            !title
              ? defaultMetaTags.title
              : defaultMetaTags.title + " | " + title
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ultimatedesignflo.com/" />
        <meta
          property="og:description"
          content={!description ? defaultMetaTags.description : description}
        />
        <meta property="og:site_name" content={defaultMetaTags.title} />

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
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <link
          rel="canonical"
          href={`https://ultimatedesignflo.com${router.asPath}`}
        />
      </Head>

      <main>{children}</main>
    </>
  );
};

export default AppContainer;

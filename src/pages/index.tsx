import Head from "next/head";
import NavBar from "../components/NavBar/NavBar";
import Hero from "../components/Hero/Hero";
import NavBarInfo from "../components/NavBarInfo/NavBarInfo";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ultimate Design Flo</title>

        {/* Meta Tags */}
        <meta name="author" content="Javier Arango" />
        <meta
          name="description"
          content="Get top-quality furniture upholstery services from the skilled team at Ultimate Design Flo. With a commitment to craftsmanship and attention to detail, we can give your furniture a new lease on life."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        <meta
          name="keywords"
          content="
          ultimate design flo,
          furniture upholstery, 
          fabric repair, 
          custom cushions and pillows, 
          quality craftsmanship, 
          attention to detail, 
          furniture restoration, 
          custom furniture, 
          Florida upholstery company, 
          expert upholsterers, 
          reputation for excellence, 
          home furnishings, 
          upholstery services, 
          furniture rejuvenation, 
          custom touches, 
          new life for furniture"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Tag (OG) */}
        <meta property="og:title" content="Ultimate Design Flo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ultimatedesignflo.com/" />
        <meta
          property="og:description"
          content="Get top-quality furniture upholstery services from the skilled team at Ultimate Design Flo. With a commitment to craftsmanship and attention to detail, we can give your furniture a new lease on life."
        />
        <meta property="og:site_name" content="Ultimate Design Flo" />

        {/* Links */}
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Navigation Info */}
        <NavBarInfo />
        <NavBar />
        <Hero />
        <Footer />
      </main>
    </>
  );
}

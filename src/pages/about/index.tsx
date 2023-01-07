import NavBar from "../../components/NavBar/NavBar";
import NavBarInfo from "../../components/NavBarInfo/NavBarInfo";
import { LinkItem } from "../../components/Global";
import Hero from "../../components/Global/Hero/Hero";

export default function About() {
  return (
    <>
      {/* Navigation Info */}
      <NavBarInfo />
      <NavBar />

      <Hero
        image={{
          src: "/assets/hero-images/story-page-img.png",
          alt: "About page image for Ultimate Design Flow website",
        }}
        containerSize="sm"
        infoBlock={{
          headline: "Our Story",
          paragraph:
            "Discover the Values That Guide Our Business and Set Us Apart",
        }}
      />

      <h1 className="display-lg">About</h1>
      <LinkItem>Go Back Home</LinkItem>
    </>
  );
}

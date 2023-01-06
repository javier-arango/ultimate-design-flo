import NavBar from "../../components/NavBar/NavBar";
import NavBarInfo from "../../components/NavBarInfo/NavBarInfo";
import { LinkItem } from "../../components/Global";

export default function About() {
  return (
    <>
      {/* Navigation Info */}
      <NavBarInfo />
      <NavBar />
      <h1 className="display-lg">About</h1>
      <LinkItem>Go Back Home</LinkItem>
    </>
  );
}

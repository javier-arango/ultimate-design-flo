import NavBar from "../../components/NavBar/NavBar";
import NavBarInfo from "../../components/NavBarInfo/NavBarInfo";
import { LinkItem } from "../../components/Global";

export default function Contact() {
  return (
    <>
      {/* Navigation Info */}
      <NavBarInfo />
      <NavBar />
      <h1 className="display-lg">Contact</h1>
      <LinkItem name="Go Back Home" />
    </>
  );
}

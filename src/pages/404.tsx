import { AppContainer } from "../components";
import { InfoBlock } from "../components/Global";
import { useRouter } from "next/router";

const ContainerStyled = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",
} as React.CSSProperties;

export default function Custom404() {
  let router = useRouter();

  return (
    <>
      <AppContainer title="Page Not Found">
        <div style={ContainerStyled}>
          <InfoBlock
            headline="404 - Page Not Found"
            paragraph="Don't worry, there's still plenty of other great content to discover on our site. Try using the navigation menu, or click the return home button below."
            button={{
              label: "Return Home",
              onClick: () => router.push("/"),
            }}
          />
        </div>
      </AppContainer>
    </>
  );
}

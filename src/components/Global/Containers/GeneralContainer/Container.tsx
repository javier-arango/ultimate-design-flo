import { IContainer, FlexDirection, JustifyContent } from "../../../../types";

interface Props extends IContainer {
  children: JSX.Element | JSX.Element[];
}

function containerStyled(
  flexDirection: FlexDirection,
  justifyContent: JustifyContent
) {
  return {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: flexDirection,
    justifyContent: justifyContent,
  } as React.CSSProperties;
}

const Container = ({
  flexDirection = "row",
  justifyContent = "space-between",
  className,
  children,
}: Props) => {
  return (
    <div
      className={`margin-responsive ${className}`}
      style={containerStyled(flexDirection, justifyContent)}
    >
      {children}
    </div>
  );
};

export default Container;

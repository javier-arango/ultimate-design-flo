import { IContainer, FlexDirection, JustifyContent } from "../../../../types";

interface Props extends IContainer {
  children: JSX.Element | JSX.Element[];
}

function containerStyled(
  flexDirection: FlexDirection,
  justifyContent: JustifyContent
) {
  return {
    display: "flex" as "flex",
    alignItems: "center" as "center",
    flexWrap: "wrap" as "wrap",
    flexDirection: flexDirection,
    justifyContent: justifyContent,
  };
}

const Container = ({
  flexDirection = "row",
  justifyContent = "space-between",
  children,
  className,
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

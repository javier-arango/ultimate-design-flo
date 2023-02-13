import { IContainer, TFlexDirection, TJustifyContent } from "lib";

interface Props extends IContainer {
  children: JSX.Element | JSX.Element[];
}

function containerStyled(
  flexDirection: TFlexDirection,
  justifyContent: TJustifyContent
) {
  return {
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    flexDirection: flexDirection,
    justifyContent: justifyContent,
  } as React.CSSProperties;
}

export const Container = ({
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

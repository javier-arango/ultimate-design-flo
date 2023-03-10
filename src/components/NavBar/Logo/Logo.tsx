import { Icon, LinkItem } from "@components/common";

const logoStyle = {
  display: "flex",
  alignItems: "center",
  gap: "0.75rem", // 12px
} as React.CSSProperties;

export const Logo = () => {
  return (
    <>
      <div style={logoStyle}>
        <Icon name="sofa" width={32} height={32} color="#D4C4BC" />
        <LinkItem to="/">Ultimate Design Flo</LinkItem>
      </div>
    </>
  );
};

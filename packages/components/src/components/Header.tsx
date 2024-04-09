import { ComponentProps } from "react";

function Header(props: ComponentProps<"header">) {
  const { style, ...rest } = props;

  return (
    <header
      style={{ backgroundColor: "#475569", paddingBlock: "1rem", ...style }}
      {...rest}
    />
  );
}

export { Header };
export default Header;

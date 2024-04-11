import { ComponentProps } from "react";

function Header(props: ComponentProps<"header">) {
  const { style, ...rest } = props;

  return (
    <header
      style={{
        width: "100%",
        backgroundColor: "#475569",
        paddingBlock: "1rem",
        borderRadius: 15,
        ...style,
      }}
      {...rest}
    />
  );
}

export { Header };
export default Header;

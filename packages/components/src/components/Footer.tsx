import { ComponentProps } from "react";

function Footer(props: ComponentProps<"footer">) {
  const { style, ...rest } = props;

  return (
    <footer
      style={{
        backgroundColor: "#334155",
        paddingBlock: "1rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...style,
      }}
      {...rest}
    />
  );
}

export { Footer };
export default Footer;

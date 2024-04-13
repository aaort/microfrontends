import { ComponentProps } from "react";

function Button(props: ComponentProps<"button">) {
  const { style, ...rest } = props;

  return (
    <button
      {...rest}
      style={{
        borderWidth: 1,
        borderRadius: 15,
        paddingBlock: "10px",
        backgroundColor: "#404040",
        ...style,
      }}
    />
  );
}

export { Button };
export default Button;

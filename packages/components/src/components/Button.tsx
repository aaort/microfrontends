import { ComponentProps } from "react";

function Button(props: ComponentProps<"button">) {
  const { style, ...rest } = props;

  return (
    <button
      {...rest}
      style={{
        backgroundColor: "#404040",
        borderRadius: 0,
        borderWidth: 1,
        borderColor: "green",
        borderStyle: "dashed",
        paddingInline: "15px",
        paddingBlock: "10px",
        ...style,
      }}
    />
  );
}

export { Button };
export default Button;

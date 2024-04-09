import { ComponentProps } from "react";

function Button(props: ComponentProps<"button">) {
  return (
    <button
      style={{
        backgroundColor: "#404040",
        borderRadius: 0,
        borderWidth: 1,
        borderColor: "green",
        borderStyle: "dashed",
        paddingInline: "15px",
        paddingBlock: "10px",
      }}
      {...props}
    />
  );
}

export { Button };
export default Button;

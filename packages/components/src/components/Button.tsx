import { ComponentProps } from "react";

function Button(props: ComponentProps<"button">) {
  return (
    <button
      {...props}
      style={{
        backgroundColor: "#404040",
        borderRadius: 0,
        borderWidth: 1,
        borderColor: "green",
        borderStyle: "dashed",
        paddingInline: "15px",
        paddingBlock: "10px",
      }}
    />
  );
}

export { Button };
export default Button;

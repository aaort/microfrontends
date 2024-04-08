import { ComponentProps } from "react";

function Button(props: ComponentProps<"button">) {
  return (
    <button
      style={{
        backgroundColor: "#404040",
        borderRadius: "10px",
        paddingInline: "15px",
        paddingBlock: "10px",
      }}
      {...props}
    />
  );
}

export { Button };
export default Button;

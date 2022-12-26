import React, { PropsWithChildren } from "react";
import classNames from "classnames";

interface ButtonProps
  extends PropsWithChildren<React.ButtonHTMLAttributes<HTMLButtonElement>> {
  color: "white" | "green";
}

const Button: React.FC<ButtonProps> = ({ children, color, ...props }) => (
  <button
    type="button"
    className={classNames(
      "p-[12px] rounded-lg drop-shadow-sm hover:drop-shadow-md",
      {
        "bg-white": color === "white",
        "bg-[#52D8B0] text-white": color === "green",
      }
    )}
    {...props}
  >
    <div className="flex items-center justify-center">{children}</div>
  </button>
);

export default Button;

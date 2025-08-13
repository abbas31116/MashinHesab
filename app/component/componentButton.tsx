import type { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router";

interface ICustombutton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: "primary" | "secondary";
  onClick: () => void;
}

function CustomButton1({
  variant = "primary",
  title,
  onClick,
  className,
}: ICustombutton) {
  return (
    <button
      onClick={onClick}
      className={`${variant == "primary" ? "bg-black text-white" : "bg-black text-orange-500"} text-xl p-8 cursor-pointer ${className}`}
    >
      {title}
    </button>
  );
}

export { CustomButton1 };

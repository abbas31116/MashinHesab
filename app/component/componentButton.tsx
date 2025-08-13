import type { ButtonHTMLAttributes } from "react";
import { useNavigate } from "react-router";

interface ICustombutton extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: "primary" | "secondary";
  onClick:()=>void
}

function CustomButton1({ variant = "primary", title, onClick, className, }: ICustombutton) {
  return (
    // <button
    //   onClick={onClick}
    //   className={`${variant == "primary" ? "bg-blue-800 text-white" : "bg-white border-blue-800 border text-blue-800"}  px-8 py-3 rounded-br-4xl rounded-tl-4xl cursor-pointer ${className}`}>

    //   {title}
    // </button>
    <button onClick={onClick} className={`${variant == "primary" ? "bg-black text-white":"bg-black text-orange-500"} text-xl p-8 cursor-pointer`}>{title}</button>
  );
}

export { CustomButton1 };

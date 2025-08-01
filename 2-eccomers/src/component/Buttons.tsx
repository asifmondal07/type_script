import type { ButtonHTMLAttributes, FC } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  ButtonText: string;
  bgColor?: string;
  textColor?: string;
  classname?: string;
}

const Buttons:FC<ButtonProps>=({
        ButtonText,
        type = "button",
        bgColor = "bg-blue-500",
        textColor = "text-white",
        className="",
        ...props

    })=>{
    return(
        <button className={`w-full px-6 py-5 rounded-lg ${bgColor} ${textColor} ${className}`} 
        {...props}>
            {ButtonText}
        </button>
    )
}

export default Buttons;
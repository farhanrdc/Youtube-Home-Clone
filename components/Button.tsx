import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";


export const buttonStyles = cva(["transition-color"], {
    variants:{
        // this variant is key
        variant: {
            default: ["bg-secondary-dark", "hover:bg-secondary-text"],
            white: ["bg-secondary-hover text-black hover:bg-secondary"],
            ghost: ["hover:bg-neutral-800"],
            dark: [
                "bg-secondary-dark",
                "hover:bg-secondary-dark-hover",
                "text-secondary",
            ],
        },
        size:{
            default:["rounded", "p-2"],
            icon:[
                "rounded-full",
                "w-10",
                "h-10",
                "flex",
                "items-center",
                "justify-center",
                "p-2.5",
            ]
        }
    },
    defaultVariants:{
        variant: "default",
        size: "default"
    }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export function Button({variant, size, className,...props} : ButtonProps){
    return <button {...props} className={twMerge(buttonStyles({variant, size}), className)} />
}
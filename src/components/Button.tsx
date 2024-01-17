import {cva, VariantProps} from "class-variance-authority";
import {ComponentProps} from "react";
import {twMerge} from "tailwind-merge";

const buttonStyles = cva(['transition-all text-center'], {
    variants: {
        variant: {
            default: ['bg-primary-dark', 'p-2'],
            link: ['hover:text-red-600', 'hover:font-bold', 'hover:text-xl'],
            ghost: ['hover:bg-gray-100', 'p-2', 'rounded-full'],
            link_bg: ['border', 'p-2', 'hover:bg-white', 'hover:text-blue-500', 'hover:font-bold', 'hover:text']
        },
        size: {
            default: ["rounded", "p-2"],
            icon: ["rounded-full", "w-10", "h-10", "flex", "items-center", "justify-center", "p-2.5"],
            link: ['rounded-lg', 'items-center', 'justify-center', 'p-2.5', 'hover:text-xl']
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export function Button({variant, size, className, ...props}: ButtonProps) {
    return <button {...props} className={twMerge(buttonStyles({variant, size}), className)}/>
}
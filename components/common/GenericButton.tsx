
'use client'

import { cn } from "@/lib/utils";

export default function GenericButton({
    value = "Insira o texto",
    className = "",
    ...props
}) {
    const buttonClasses = cn(
    'w-full', 
    'h-full', 
    'bg-terciaria',
    'text-white',
    'rounded-md',
    'text-[14px]',
    'hover:bg-terciaria2',
    'shadow-md',
	className,
	);
    return(
        <button 
        className={buttonClasses}
        {...props}
        > 
        {value}
        </button> 
    )
}
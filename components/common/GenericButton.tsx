
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
    'text-[18px]',
    'hover:bg-terciaria2',
    'shadow-md',
    'text-[18px]',
	className,
	);
    return(
        <button 
        className={buttonClasses}> 
        {value}
        </button> 
    )
}
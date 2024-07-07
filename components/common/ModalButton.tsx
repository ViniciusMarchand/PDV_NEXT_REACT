
'use client'

import { cn } from "@/lib/utils";

export default function ModalButton({
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
        "flex",
        "items-center",
        "justify-center",
        className,
        );

    return(
        <div 
        className={buttonClasses} 
        {...props}
        >
            {value}
        </div> 
    )
}
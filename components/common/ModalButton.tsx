
'use client'

import { cn } from "@/lib/utils"

export default function ModalButton({
    value = "Insira o texto",
    onClick = () => {},
    className = "",
    ...props
}) {
    const buttonClasses = cn(
        'cursor-pointer',
        'w-full',
        'h-full',
        'bg-terciaria',
        'text-white',
        'rounded-md',
        'hover:bg-terciaria2',
        'shadow-md',
        'flex',
        'items-center',
        'justify-center',
        'text-[18px]',
        className,
    );

    return(
        <div {...props} className={buttonClasses}>
            {value}
        </div> 
    )
}
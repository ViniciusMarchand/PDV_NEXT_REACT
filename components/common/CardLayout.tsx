import { cn } from "@/lib/utils"

type Props = {
    children: string | JSX.Element | JSX.Element[],
    className?: string,
}
export default function CardLayout({children, className} : Props) {
    return (
        <div className={cn("bg-secundaria rounded-md shadow-lg h-full w-full flex flex-col", className)}>
            {children}
        </div>
    )
}
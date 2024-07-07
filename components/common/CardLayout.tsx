type Props = {
    children: string | JSX.Element | JSX.Element[]
}
export default function CardLayout({children} : Props) {
    return (
        <div className="bg-secundaria rounded-md shadow-lg h-full w-full flex flex-col">
            {children}
        </div>
    )
}
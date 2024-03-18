type Props = {
    children: string | JSX.Element | JSX.Element[]
  }
export default function CardLayout({children} : Props) {
    return (
        <div className="bg-secundaria rounded-md shadow-lg">
            {children}
        </div>
    )
}
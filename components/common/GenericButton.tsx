
'use client'

export default function GenericButton({
    value = "Insira o texto",
    onClick = () => {}

}) {
    return(
        <button className="w-full h-full bg-terciaria text-white rounded-md text-[18px] hover:bg-terciaria2 " onClick={() => onClick()}>
            {value}
        </button>
    )
}
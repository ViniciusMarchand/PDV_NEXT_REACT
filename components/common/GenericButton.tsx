
'use client'

export default function GenericButton({
    value = "Insira o texto",
    onClick = () => {},
    fontSize = '18px',

}) {
    return(
        <button className={`w-full h-full bg-terciaria text-white rounded-md text-[${fontSize}] hover:bg-terciaria2 shadow-md`} onClick={() => onClick()}>
            {value}
        </button> 
    )
}
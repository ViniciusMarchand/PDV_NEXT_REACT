
'use client'

export default function ModalButton({
    value = "Insira o texto",
    onClick = () => {},
    fontSize = '18px',

}) {
    return(
        <div className={`w-full h-full bg-terciaria text-white rounded-md text-[${fontSize}] hover:bg-terciaria2 shadow-md flex items-center justify-center`} onClick={() => onClick()}>
            {value}
        </div> 
    )
}
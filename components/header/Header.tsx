import { FaRegUserCircle } from "react-icons/fa";

export default function Header() {
    return <div className="w-full h-header bg-secundaria shadow-md flex items-center px-10 fixed top-0  justify-end">
        <div className="cursor-pointer hover:text-terciaria transition">
            <FaRegUserCircle size={32}/>
        </div>
    </div>
}
import { FaRegUserCircle } from "react-icons/fa";
import UserInfo from "./UserInfo";

export default function Header() {
    return <div className="w-full h-header bg-secundaria shadow-md flex items-center px-10 fixed top-0  justify-end">
        <UserInfo />
    </div>
}
import { FaSpinner } from "react-icons/fa";

export default function Spinner({size = 30}) {
    return (
        <div className="animate-spin">
            <FaSpinner size={size}/>
        </div>
    )
}

import Image, { StaticImageData } from "next/image";
import { CiImageOff } from "react-icons/ci";

interface Props {
    src?: string | StaticImageData | undefined | null;
    alt?: string;
}

export default function TableProductImage({src, alt = ""}: Props) {
    return (

        <div className="flex justify-center w-full">
            {
                src ? 
                <Image src={src} alt={alt} width={35} height={35} className="rounded-md border border-[rgba(0,0,0,0.09)]"/>  :
                <span className="text-sm text-gray-900 italic"><CiImageOff  size={35}/></span>
            }
        </div>

    )
}
import Image, { StaticImageData } from "next/image";
import { CiImageOff } from "react-icons/ci";

interface Props {
  src?: string | StaticImageData | undefined | null;
  alt?: string;
}

export default function TableProductImage({ src, alt = "" }: Props) {
  return src ? (
    <div className="rounded-md outline outline-2 outline-solid outline-[rgba(0,0,0,0.8)] items-center w-8 h-8">
      {
        <Image
          src={src}
          alt={alt}
          width={32}
          height={32}
          className="rounded-md object-contain max-w-full max-h-full"
        />
      }
    </div>
  ) : (
    <div className="rounded-md outline outline-2 outline-solid outline-[rgba(0,0,0,0.8)] items-center w-8 h-8">
      {
        <span className="text-sm text-gray-900 italic">
          <CiImageOff size={32} />
        </span>
      }
    </div>
  )
}

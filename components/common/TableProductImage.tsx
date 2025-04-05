import Image, { StaticImageData } from "next/image";
import { CiImageOff } from "react-icons/ci";

interface Props {
  src?: string | StaticImageData | undefined | null;
  alt?: string;
}

export default function TableProductImage({ src, alt = "" }: Props) {
  return (
    <div className="flex justify-center items-center rounded-md w-8 h-8 outline outline-2 outline-solid outline-black/60 group-hover:outline-white/70">
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={32}
          height={32}
          className="rounded-md object-contain max-w-full max-h-full"
        />
      ) : (
        <span className="text-sm text-gray-900 italic">
          <CiImageOff size={32} />
        </span>
      )}
    </div>
  );
}

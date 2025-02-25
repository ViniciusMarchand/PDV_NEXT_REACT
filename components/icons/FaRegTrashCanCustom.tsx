import { FaRegTrashCan } from "react-icons/fa6";

interface FaRegTrashCanProps {
  onClick?: () => void;
  className?: string;
  title?: string;
}

export default function FaRegTrashCanCustom({
  onClick,
  className,
  title,
}: FaRegTrashCanProps) {
  return (
    <FaRegTrashCan
      title={title || "Deletar"}
      className={`text-red-700 group-hover:text-textoContraste transition cursor-pointer ml-2 ${className}`}
      size={18}
      onClick={onClick}
    />
  );
}

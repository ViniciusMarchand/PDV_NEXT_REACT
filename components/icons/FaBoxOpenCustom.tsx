import { FaBoxOpen } from "react-icons/fa6";

interface FaRegPenProps {
  onClick?: () => void;
  className?: string;
  title?: string;
}

export default function FaBoxOpenCustom({
  onClick,
  className,
  title,
}: FaRegPenProps) {
  return (
    <FaBoxOpen
      title={title || "Editar"}
      className={`text-terciaria group-hover:text-textoContraste transition cursor-pointer ml-2 ${className}`}
      size={18}
      onClick={onClick}
    />
  );
}

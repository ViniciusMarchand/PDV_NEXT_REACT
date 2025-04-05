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
      className={`text-terciaria group-hover:text-textoContraste transition cursor-pointer ${className}`}
      size={20}
      onClick={onClick}
    />
  );
}

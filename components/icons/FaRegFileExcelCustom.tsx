import { FaFileExcel } from "react-icons/fa6";

interface FaRegPenProps {
  onClick?: () => void;
  className?: string;
  title?: string;
}

export default function FaRegFileExcelCustom({
  onClick,
  className,
  title,
}: FaRegPenProps) {
  return (
    <FaFileExcel
      title={title || "Editar"}
      className={`text-textoContraste transition cursor-pointer  ${className}`}
      size={18}
      onClick={onClick}
    />
  );
}

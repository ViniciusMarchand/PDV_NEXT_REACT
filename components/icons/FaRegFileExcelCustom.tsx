import { FaFileDownload } from "react-icons/fa";
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
    <FaFileDownload
      title={title || "Editar"}
      className={`text-textoContraste transition cursor-pointer  ${className}`}
      size={18}
      onClick={onClick}
    />
  );
}

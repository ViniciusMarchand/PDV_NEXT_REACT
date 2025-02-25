import { GiCancel } from "react-icons/gi";

interface GiCancelProps {
  onClick?: () => void;
  className?: string;
  title?: string;
}

export default function GiCancelCustom({
  onClick,
  className,
  title,
}: GiCancelProps) {
  return (
    <GiCancel
      title={title || "Confirmar edição"}
      className={`text-red-700 group-hover:text-textoContraste cursor-pointer transition mx-2 ${className}`}
      size={18}
      onClick={onClick}
    />
  );
}

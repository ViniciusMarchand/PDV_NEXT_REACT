import { GiConfirmed } from "react-icons/gi";

interface GiConfirmedProps {
  onClick?: () => void;
  className?: string;
  title?: string;
}

export default function GiConfirmedCustom({
  onClick,
  className,
  title,
}: GiConfirmedProps) {
  return (
    <GiConfirmed
      title={title || "Confirmar edição"}
      className={`text-green-700 group-hover:text-textoContraste transition cursor-pointer ${className}`}
      size={18}
      onClick={onClick}
    />
  );
}

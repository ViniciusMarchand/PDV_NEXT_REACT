import { ToastContext } from "@/contexts/ToastContext";
import { useContext } from "react";

export default function useToast() {
    const toast = useContext(ToastContext);
    return toast;
}
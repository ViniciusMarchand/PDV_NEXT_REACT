import { ToastContext } from "@/contexts/ToastContext";
import { WebSocketContext } from "@/contexts/WebSocketContext";
import { useContext } from "react";

export default function useWebSocket() {
    const ws = useContext(WebSocketContext);
    return ws;
}
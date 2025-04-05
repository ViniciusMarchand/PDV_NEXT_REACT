'use client'
import productApi from "@/api/productApi";
import ImportResultModal from "@/components/produtos/ImportResultModal";
import { ImportReulst } from "@/global/Types";
import useToast from "@/hooks/useToast";
import { createContext, useEffect, useRef, useState } from "react";


import { ReactNode } from "react";

interface ContextProps {
    connect: () => void;
    disconnect: () => void;
    message: any;
    importResult: ImportReulst | undefined;
    isLoadingExcel: boolean;
    setIsLoadingExcel: (value: boolean) => void;
}

export const WebSocketContext = createContext({} as ContextProps);

interface PopoverContextProps {
    children: ReactNode;
}

export function WebSocketProvider({ children }: PopoverContextProps) {

    const [message, setMessage] = useState<any>();
    const [importResult, setImportResult] = useState<ImportReulst>();
    const socketRef = useRef<WebSocket | null>(null);
    const { successToastNoAutoClose, warningToastNoAutoClose, successToast } = useToast();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoadingExcel, setIsLoadingExcel] = useState(false);
  
    const connect = () => {
      if (socketRef.current) return; 
  
      socketRef.current = new WebSocket("wss://wss.ferragemavila.com.br/message");
  
      socketRef.current.onopen = () => console.log("Conectado ao WebSocket!");
      
      socketRef.current.onmessage = (event: any) => {
        setMessage(JSON.parse(event.data));

      };
  
      socketRef.current.onclose = () => {
        console.log("Conexão fechada.");
        socketRef.current = null;
      };
    };
  
    const disconnect = () => {
      if (socketRef.current) {
        socketRef.current.close();
      }
    };

    useEffect(() => {
      if(!message)
        return;

      const { status, content, operation } = message;

      if(status === "SUCCESS"){
        successToastNoAutoClose(content);
      } else {
        warningToastNoAutoClose(content + "\n\n Clique aqui para ver mais detalhes", setIsOpen);
      }

      (async () => {
        try {
          let res;
          if(operation === "CSV") {
            res = await productApi.importCSVResult();
          } else if(operation === "XML") {
            res = await productApi.importXMLResult();
          } else if(operation === "RELATORIO_PRODUTOS") {
            successToast("Excel pronto para download. Clique no botão de exportar produtos novamente para baixar o arquivo.");
            setIsLoadingExcel(false);
          } else {
            throw new Error("Error ao tentar identificar a operação")
          }

          if (res) {
            setImportResult(res.data);
          }

        } catch (error: any) {
          console.error(error.message);
        }
      })();


      setMessage(null);
      disconnect();
    },[message, successToastNoAutoClose, warningToastNoAutoClose]);
    
    return <WebSocketContext.Provider value={{connect, disconnect, message: message, importResult, isLoadingExcel, setIsLoadingExcel}}>
        {children}
        <ImportResultModal isOpen={isOpen} setIsOpen={setIsOpen} importResult={importResult}/>
    </WebSocketContext.Provider>
}
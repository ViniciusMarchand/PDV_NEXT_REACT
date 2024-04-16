'use client'
import CardLayout from "@/components/common/CardLayout";
import AlertDialogProdutos from "@/components/produtos/AlertDialogProdutos";
import TabelaProdutos from "@/components/produtos/TabelaProdutos";
import { useEffect, useState, useRef, useCallback } from "react";

export default function Produtos() {
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [key, setKey] = useState(0);

    const atualizarTabela = useCallback(() => {
        setKey(key + 1);
    },[key]);
    
    useEffect(() => {
        if (!ref.current) {

          return;
        }

        const resizeObserver = new ResizeObserver(() => {
          if(ref?.current?.offsetHeight !== height) {
            setHeight(Number(ref?.current?.offsetHeight));
          }
        });

        resizeObserver.observe(ref.current);
        return function cleanup() {
          resizeObserver.disconnect();
        }
      }, [ref, height]);
      console.warn(height)
      return <div className="flex flex-col w-full h-full" key={key}>
        <div className="w-full h-[80px] mb-3">
            <CardLayout>
                <div className="h-full w-full flex justify-start items-center px-3  ">
                    <AlertDialogProdutos />
                </div>
            </CardLayout>
        </div>
        <div className="w-full h-full" ref={ref}>
            <CardLayout>
                <TabelaProdutos divHeight={height} />
            </CardLayout>
        </div>
    </div>

}
'use client'
import React, { ReactNode, useCallback, useEffect, useId, useState } from "react";
import Cupom from "./Cupom";
import salesApi from "@/api/salesApi";
import { Sale } from "@/global/Types";

interface Props {
  saleId?: number;
  saleProp?: Sale;
  children:ReactNode;
}

const PrintButton = ({ saleId, saleProp, children } : Props) => {
  const [sale, setSale] = useState<Sale>();
  
  const cupomId = useId();

  const getSale = useCallback(async () => {
    if(saleId) {
        const res = await salesApi.getSaleById(saleId);
        setSale(res.data);
    } else if(saleProp) {
        setSale(saleProp);
    }
}, [saleId, saleProp]);
  useEffect(() => {
    if (sale) {
      const printWindow = window.open("", "", "width=800,height=600");
      if (printWindow) {
        printWindow.document.write(
          "<html><head><style>@page { size: auto; margin: 0; } body { margin: 0; padding: 0; width: 100vw; font-family: monospace; }</style></head><body>"
        );

        printWindow.document.write(`
                    <div style="width: 100%; font-family: monospace; font-size: 14px; padding: 10px;">
                    ${document.getElementById(cupomId)?.innerHTML}
                    </div>
                `);

        printWindow.document.write("</body></html>");
        printWindow.document.close();
        printWindow.focus();

        const imgElement = printWindow.document.querySelector("img");
        if (imgElement) {
          imgElement.onload = () => {
            printWindow.print();
            printWindow.close();
          };
        } else {
          // Se não encontrar a imagem, imprime imediatamente
          printWindow.print();
          printWindow.close();
        }
      }
    }
  }, [sale]);


    return (
        <div>
            {
                sale &&
                <div id={cupomId} style={{ display: "none" }}>
                    <Cupom sale={sale} />
                </div>
            }

            <button onClick={getSale}>
                <div className="w-full flex justify-center">
                    {children}
                </div>
            </button>
        </div>
      )}

export default PrintButton;

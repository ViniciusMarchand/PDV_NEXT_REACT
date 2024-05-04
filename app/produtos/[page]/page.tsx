'use client'
import CardLayout from "@/components/common/CardLayout";
import AlertDialogProdutos from "@/components/produtos/AlertDialogProdutos";
import TabelaProdutos from "@/components/produtos/TabelaProdutos";
import { ProductModalFormProvider } from "@/contexts/ProductModalFormContext";
import { useState, useRef, useCallback } from "react";

export default function Produtos(props:any) {
  const page = (props.params.page - 1);
  const [key, setKey] = useState('');

  const updateTable = useCallback(() => {
    setKey(crypto.randomUUID());
  }, []);

  return <div className="flex flex-col w-full h-full">
    <ProductModalFormProvider>
      <div className="w-full h-[80px] mb-3">
        <CardLayout>
          <div className="h-full w-full flex justify-start items-center px-3  ">
            <AlertDialogProdutos updateTable={updateTable} />
          </div>
        </CardLayout>
      </div>
      <div className="h-[500px] grow">
        <CardLayout>
          <TabelaProdutos page={page} key={key} />
        </CardLayout>
      </div>
    </ProductModalFormProvider>
  </div>

}
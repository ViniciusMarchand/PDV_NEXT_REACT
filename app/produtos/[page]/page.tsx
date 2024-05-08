'use client'
import CardLayout from "@/components/common/CardLayout";
import AlertDialogProdutos from "@/components/produtos/AlertDialogProdutos";
import TabelaProdutos from "@/components/produtos/TabelaProdutos";
import { ProductModalFormContext } from "@/contexts/ProductModalFormContext";
import { useContext } from "react";

export default function Produtos(props: any) {
  const page = (props.params.page - 1);
  const { key } = useContext(ProductModalFormContext);

  return <div className="flex flex-col w-full h-full">
    <div className="w-full h-[80px] mb-3">
      <CardLayout>
        <div className="h-full w-full flex justify-start items-center px-3  ">
          <AlertDialogProdutos />
        </div>
      </CardLayout>
    </div>
    <div className="h-[500px] grow">
      <CardLayout>
        <TabelaProdutos key={key} page={page} />
      </CardLayout>
    </div>
  </div>

}
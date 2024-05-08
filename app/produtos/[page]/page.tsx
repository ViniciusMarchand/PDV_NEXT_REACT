'use client'
import CardLayout from "@/components/common/CardLayout";
import ModalButton from "@/components/common/ModalButton";
import AlertDialogProdutos from "@/components/produtos/AlertDialogProdutos";
import TabelaProdutos from "@/components/produtos/TabelaProdutos";
import { AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { ProductModalFormContext } from "@/contexts/ProductModalFormContext";
import { useContext } from "react";

export default function Produtos(props: any) {
  const page = (props.params.page - 1);
  const { key, statusToAdd } = useContext(ProductModalFormContext);

  return <div className="flex flex-col w-full h-full">
    <div className="w-full h-[80px] mb-3">
      <CardLayout>
        <div className="h-full w-full flex justify-start items-center px-3  ">
          <AlertDialogTrigger onClick={() => statusToAdd()}>
            <div className="w-[200px] h-[35px]">
              <ModalButton value="Adicionar Produto" />
            </div>
          </AlertDialogTrigger>
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
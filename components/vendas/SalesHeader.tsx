import { FormEvent, useContext, useState } from "react";
import CardLayout from "../common/CardLayout";
import ModalButton from "../common/ModalButton";
import { AlertDialogTrigger } from "../ui/alert-dialog";
import { Input } from "../ui/input";
import salesApi from "@/api/salesApi";
import { ToastContext } from "@/contexts/ToastContext";
import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";

export default function SalesHeader() {

    const {successToast, errorToast} = useContext(ToastContext);
    const { updateProductsFromSales } = useContext(ProductModalSalesFormContext);

    const addProduct = async (e:FormEvent) => {
        e.preventDefault();

        const barCode = (e.target as HTMLFormElement).barCode.value;
        salesApi.addProductByBarCode(barCode).then(() => {
            successToast("Produto adicionado com sucesso!");
            const input = (e.target as HTMLFormElement).barCode;
            input.value = "";
            input.focus(); 
        }).catch((error) => {
            errorToast(error.message);
        }).finally(() => updateProductsFromSales());


    }

    return (
        <CardLayout>
            <div className="h-full w-full flex justify-start items-center px-3 gap-5">
                <AlertDialogTrigger>
                    <div className="w-[200px] h-[35px]">
                        <ModalButton value="Adicionar Produto" />
                    </div>
                </AlertDialogTrigger>
                <form onSubmit={(e) => addProduct(e)}>
                    <Input
                    id="barCode"
                    name="barCode"
                    type="number"
                    maxLength={13}
                    placeholder="Insira o código de barra" 
                    className="focus-visible:ring-0 focus-visible:ring-offset-0 h-[35px] w-[184px]" 
                    />
                </form>
            </div>
        </CardLayout>
    )
} 
import { Item, ProductInputs } from "@/global/Types";
import { DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "../ui/dialog";
import { useContext } from "react";
import { ToastContext } from "@/contexts/ToastContext";
import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";
import salesApi from "@/api/salesApi";

interface DeleteProductDialogProps {
    item?: Item;
}
export default function DeleteProductFromSalesDialog(itemInput: DeleteProductDialogProps) {

    const { descricao } = itemInput?.item?.product || {};
    const { id } = itemInput.item || {};
    const {successToast, errorToast} = useContext(ToastContext);
    const { updateProductsFromSales } = useContext(ProductModalSalesFormContext);


    function deleteProduct() {
        if(id !== undefined)
        salesApi.removeProduct(id)
        .then(res => successToast(descricao + " deletado com sucesso!"))
        .catch(error => errorToast(error.message))
        .finally(() => updateProductsFromSales());
    }

    return <>
        <DialogContent>
            <DialogTitle className="text-[20px] font-bold">
                Remover produto da venda
            </DialogTitle>
            <DialogDescription className="text-[18px]">
                Você tem certeza que deseja remover o produto: {descricao}? 
            </DialogDescription>
            <DialogFooter className="flex justify-center">
                <DialogTrigger className="bg-red-500 py-2 px-3 rounded-md text-[#fdfdfd] hover:bg-red-600 shadow-2xl" onClick={() => deleteProduct()}>
                    Remover
                </DialogTrigger>
            </DialogFooter>
        </DialogContent>
    </>
}
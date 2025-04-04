import { ProductInputs } from "@/global/Types";
import { DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "../ui/dialog";
import productApi from "@/api/productApi";
import { useContext } from "react";
import { ToastContext } from "@/contexts/ToastContext";
import { ProductModalFormContext } from "@/contexts/ProductModalFormContext";

interface DeleteProductDialogProps {
    product?: ProductInputs;
}
export default function DeleteProductDialog(productInput: DeleteProductDialogProps) {

    const {id, descricao} = productInput?.product || {};
    const {successToast, errorToast} = useContext(ToastContext);
    const { searchItems } = useContext(ProductModalFormContext);

    function deleteProduct() {
        if(id !== undefined)
        productApi.delete(id)
        .then(res => successToast(descricao + " deletado com sucesso"))
        .catch(error => errorToast(error.message))
        .finally(() => searchItems());
    }

    return <>
        <DialogContent>
            <DialogTitle className="text-[20px] font-semibold">
                Remover produto
            </DialogTitle>
            <DialogDescription className="text-[18px]">
                Você tem certeza que deseja remover o produto: {descricao}? 
            </DialogDescription>
            <DialogFooter className="flex justify-center">
                <DialogTrigger className="bg-red-400 py-2 px-3 rounded-md text-[#fdfdfd] hover:bg-red-500 shadow-md" onClick={() => deleteProduct()}>
                    Remover
                </DialogTrigger>
            </DialogFooter>
        </DialogContent>
    </>
}
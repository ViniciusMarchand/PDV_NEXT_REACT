import { ProductInputs } from "@/global/Types";
import { DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "../ui/dialog";
import productApi from "@/api/productApi";
import { useContext } from "react";
import { ToastContext } from "@/contexts/ToastContext";
import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";

interface DeleteProductDialogProps {
    product?: ProductInputs;
}
export default function DeleteProductFromSalesDialog(productInput: DeleteProductDialogProps) {

    const {id, descricao} = productInput?.product || {};
    const {successToast, errorToast} = useContext(ToastContext);
    const { updateKey } = useContext(ProductModalSalesFormContext);

    function deleteProduct() {
        // if(id !== undefined)
        // productApi.delete(id)
        // .then(res => successToast(descricao + " deletado com sucesso!"))
        // .catch(error => errorToast(error.message))
        // .finally(() => updateKey());
        alert("produto deletado com sucesso! [TODO]");
    }

    return <>
        <DialogContent>
            <DialogTitle className="text-[20px] font-bold">
                Deletar produto
            </DialogTitle>
            <DialogDescription className="text-[18px]">
                Você tem certeza que deseja remover {descricao}? 
            </DialogDescription>
            <DialogFooter className="flex justify-center">
                <DialogTrigger className="bg-red-500 py-2 px-3 rounded-md text-[#fdfdfd] hover:bg-red-600 shadow-2xl" onClick={() => deleteProduct()}>
                    Deletar
                </DialogTrigger>
            </DialogFooter>
        </DialogContent>
    </>
}
import salesApi from "@/api/salesApi";
import ModalButton from "../common/ModalButton";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "../ui/dialog"
import { useCallback, useContext } from "react";
import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";
import { ToastContext } from "@/contexts/ToastContext";

type Props = {
    children: string | JSX.Element | JSX.Element[]
}

export default function CancelSalesModal({ children }: Props) {
    const { updateProductsFromSales } = useContext(ProductModalSalesFormContext);
    const { successToast, errorToast } = useContext(ToastContext);

    const cancelSales = useCallback(() => {
        salesApi.cancelSales().then(res => {
            successToast("Venda cancelada com sucesso!");
            updateProductsFromSales();
        }).catch(error => errorToast("Erro ao cancelar venda!"))
    }, [updateProductsFromSales, errorToast, successToast]);
    
    return (
        <Dialog>
            <DialogContent>
                <DialogTitle>
                    Cancelar venda
                </DialogTitle>
                <div>
                    <p>Voccê tem certeza que desja cancelar essa venda? Todos os itens serão removidos do carrinho de compra.</p>
                </div>
                <DialogFooter>
                    <DialogClose>
                        <ModalButton value="Cancelar venda" className="p-[8px] text-[16px] bg-red-400 hover:bg-red-500 shadow-sm" onClick={() => cancelSales()} />
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
            <DialogTrigger className="w-full h-full">
                {children}
            </DialogTrigger>
        </Dialog>
    );
}

import salesApi from "@/api/salesApi";
import ModalButton from "../common/ModalButton";
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogTitle, DialogTrigger } from "../ui/dialog"
import { ReactNode, useCallback, useContext } from "react";
import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";
import { ToastContext } from "@/contexts/ToastContext";

export default function CancelSalesModal(props: { children: ReactNode, setPayment: Function, isValid:boolean }) {
    const { children, setPayment, isValid } = props;

    const { updateProductsFromSales } = useContext(ProductModalSalesFormContext);
    const { successToast, errorToast } = useContext(ToastContext);

    const cancelSales = useCallback(() => {
        salesApi.cancelSales().then(res => {
            successToast("Venda cancelada com sucesso!");
            setPayment("");
            updateProductsFromSales();
        }).catch(error => errorToast(error.message))
    }, [updateProductsFromSales, errorToast, successToast, setPayment]);

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
            <DialogTrigger className={`w-full h-[40px]`} disabled={!isValid}>
                {children}
            </DialogTrigger>
        </Dialog>
    );
}

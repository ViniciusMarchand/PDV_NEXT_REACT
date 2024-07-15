import { ReactNode, useContext } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "../ui/dialog";
import salesApi from "@/api/salesApi";
import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";
import { ToastContext } from "@/contexts/ToastContext";
import { cn } from "@/lib/utils";


export default function ModalConfirmSales(props: { children: ReactNode, payment: string, setPayment: Function, className?: string, isValid: boolean }) {

    const { children, payment, setPayment, className, isValid } = props;
    const { updateProductsFromSales } = useContext(ProductModalSalesFormContext);
    const { successToast, errorToast } = useContext(ToastContext);

    const buttonClasses = cn(
        'w-full', 
        'h-full', 
        'bg-terciaria',
        'text-white',
        'rounded-md',
        'text-[18px]',
        'hover:bg-terciaria2',
        'shadow-md',
        'text-[18px]',
        className,
    );

    async function sendSale() {
        const endSale = { formaPagamento: payment, dataHoraConclusao: new Date().toISOString()};

        salesApi.confirmSale(endSale)
        .then(() => {
            setPayment("");
            successToast("Venda finalizada com sucesso!");
        }).catch(error => {
            errorToast(error.message);
        }).finally(() => updateProductsFromSales());
        
    }

    return <Dialog>
        <DialogContent>
            <DialogTitle>Finalizar venda</DialogTitle>
            <DialogDescription className="text-[18px]">Você tem certeza que deseja finalizar a venda?</DialogDescription>
            <DialogFooter>
                <DialogClose className="bg-red-500 text-textoContraste p-2 rounded-sm hover:bg-red-600 w-[100px]">
                    Fechar
                </DialogClose>
                <DialogClose
                    className="bg-terciaria text-textoContraste p-2 rounded-sm hover:bg-terciaria2 w-[100px]"
                    onClick={() => sendSale()}
                >
                    Confirmar
                </DialogClose>
            </DialogFooter>
        </DialogContent>
        <DialogTrigger className={"w-full h-[40px] " + ((!isValid) && " opacity-50 cursor-not-allowed")} disabled={!isValid}>
            {children}
        </DialogTrigger>
    </Dialog>
}
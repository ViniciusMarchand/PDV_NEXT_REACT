import salesApi from "@/api/salesApi";
import { DialogClose, DialogDescription, DialogFooter, DialogTitle } from "../ui/dialog";
import { useContext } from "react";
import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";
import { ToastContext } from "@/contexts/ToastContext";
import { Button } from "../ui/button";

interface Props {
    setIsConfirmed:Function,
    setPayment: Function,
    payment:string,
    setResult:Function,
    setIsOpen:Function
}

export default function ConfirmSales({ setIsConfirmed, setPayment, payment, setResult, setIsOpen } : Props) {

    const { updateProductsFromSales } = useContext(ProductModalSalesFormContext);
    const { successToast, errorToast } = useContext(ToastContext);


    async function sendSale() {
        const endSale = { formaPagamento: payment, dataHoraConclusao: new Date().toISOString()};
        
        salesApi.confirmSale(endSale)
        .then((res) => {
            setPayment('');
            successToast("Venda finalizada com sucesso!");
            setIsConfirmed(true);
            setResult(res)
        }).catch(error => {
            errorToast(error.message);
        }).finally(() => updateProductsFromSales());
        
    }


    return  <>
        <DialogTitle>Finalizar venda</DialogTitle>
        <DialogDescription className="text-[18px]">Você tem certeza que deseja finalizar a venda?</DialogDescription>
        <DialogFooter>
            <Button 
                className="bg-red-500 text-textoContraste p-2 rounded-sm hover:bg-red-600 w-[100px]"
                onClick={() => setIsOpen(false)}
            >
                Fechar
            </Button>
            <Button
                className="bg-terciaria text-textoContraste p-2 rounded-sm hover:bg-terciaria2 w-[100px]"
                onClick={() => sendSale()}
            >
                Confirmar
            </Button>
        </DialogFooter>
    </>
}
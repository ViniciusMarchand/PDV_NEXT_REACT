import { ReactNode, useContext, useEffect, useState } from "react";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "../ui/dialog";
import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Input } from "../ui/input";
import { CurrencyInput } from "react-currency-mask";
type Props = {
    children: string | JSX.Element | JSX.Element[]
}
export default function ModalConfirmSales({ children }: Props) {

    const { sale } = useContext(ProductModalSalesFormContext);
    const [payment, setPayment] = useState<string>("");
    const [receivedValue, setReceivedValue] = useState<number>(0);
    const [enoughValue, setEnoughValue] = useState<boolean>(false);
    const [change, setChange] = useState<number>(0);


    const handleReceivedValue = (value: number) => {
        setReceivedValue(value);
    }

    useEffect(() => {
        if(receivedValue >= sale?.precoTotal || 0){
            setEnoughValue(true);
        } else {
            setEnoughValue(false);
        }

        setChange(receivedValue - sale?.precoTotal || 0);
    },[receivedValue, sale?.precoTotal]);


    return <Dialog>
        <DialogContent className="max-w-[300px] min-w-0">
            <DialogTitle>Finalizar compra</DialogTitle>
            <DialogDescription className="text-[18px]">Valor total: {sale?.precoTotal}</DialogDescription>

            <div>
                <label>Forma de pagamento</label>
                <Select
                onValueChange={(value) => setPayment(value)}
                >
                    <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0 border-gray-400 mt-1">
                        <SelectValue placeholder="Forma de pagamento" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="Pix" className="cursor-pointer">Pix</SelectItem>
                        <SelectItem value="Débito" className="cursor-pointer">Débito</SelectItem>
                        <SelectItem value="Crédito" className="cursor-pointer">Crédito</SelectItem>
                        <SelectItem value="Dinheiro" className="cursor-pointer">Dinheiro</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            {
                payment === "Dinheiro" &&

                <div>
                    <label className="mb-2">Valor recebido</label>
                    {
                        !enoughValue && <p className="text-red-600 italic text-[12px]">Valor insuficiente</p>
                    }
                    <CurrencyInput
                    defaultValue={"0000"}
                        InputElement={<Input type="text" className={"mt-1 w-full focus-visible:ring-0 focus-visible:ring-offset-0  border-gray-400 " + (!enoughValue && "ring-red-600 ring-1 animate-pulse border-0 focus-visible:ring-1 focus-visible:ring-red-600")}/>}
                        onChangeValue={(event, originalValue, maskedValue) => { 
                            handleReceivedValue(Number(originalValue));
                        }} 
                    />
                </div>
            }

            {
                enoughValue && 
                <div>
                    <label className="mb-1">Troco</label>
                    <CurrencyInput
                    defaultValue={"0000"}
                        InputElement={<Input type="text" disabled className={"mt-1 w-full focus-visible:ring-0 focus-visible:ring-offset-0  border-gray-400 " + (!enoughValue && "ring-red-600 ring-1 animate-pulse border-0 focus-visible:ring-1 focus-visible:ring-red-600")}/>}
                        onChangeValue={(event, originalValue, maskedValue) => { 

                        }} 
                        value={change}
                    />  
                </div>
            }
            <DialogFooter>
            <DialogClose className="bg-red-500 text-textoContraste p-2 rounded-sm hover:bg-red-600 w-1/2">
              Fechar
            </DialogClose>
            <DialogClose className="bg-terciaria text-textoContraste p-2 rounded-sm hover:bg-terciaria2 w-1/2">
              Confirmar
            </DialogClose>
            </DialogFooter>
        </DialogContent>
        <DialogTrigger className="w-full h-full">
            {children}
        </DialogTrigger>
    </Dialog>
}
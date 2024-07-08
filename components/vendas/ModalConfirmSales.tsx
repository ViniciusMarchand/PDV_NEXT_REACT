import { ReactNode, useContext, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogTitle, DialogTrigger } from "../ui/dialog";
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
        <DialogContent className="w-[400px]">
            <DialogTitle>Finalizar compra</DialogTitle>
            <DialogDescription className="text-[18px]">Valor total: {sale?.precoTotal}</DialogDescription>

            <label>Forma de pagamento</label>
            <Select
            onValueChange={(value) => setPayment(value)}
            >
                <SelectTrigger className="w-[200px] focus:ring-0 focus:ring-offset-0 border-gray-400">
                    <SelectValue placeholder="Forma de pagamento" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="Pix" className="cursor-pointer">Pix</SelectItem>
                    <SelectItem value="Débito" className="cursor-pointer">Débito</SelectItem>
                    <SelectItem value="Crédito" className="cursor-pointer">Crédito</SelectItem>
                    <SelectItem value="Dinheiro" className="cursor-pointer">Dinheiro</SelectItem>
                </SelectContent>
            </Select>

            {
                payment === "Dinheiro" &&

                <div>
                    <label>Valor recebido</label>
                    {
                        !enoughValue && <p className="text-red-600 italic text-[12px]">Valor insuficiente</p>
                    }
                    <CurrencyInput
                    defaultValue={"0000"}
                        InputElement={<Input type="text" className={"w-[200px] focus-visible:ring-0 focus-visible:ring-offset-0  border-gray-400 " + (!enoughValue && "ring-red-600 ring-1 animate-pulse border-0 focus-visible:ring-1 focus-visible:ring-red-600")}/>}
                        onChangeValue={(event, originalValue, maskedValue) => { 
                            handleReceivedValue(Number(originalValue));
                        }} 
                    />
                </div>
            }

            {
                enoughValue && 
                <p>Troco: R$ {change.toLocaleString('pt-BR', {
                    maximumFractionDigits: 2,
                })}</p>
            }
            <DialogFooter>


            </DialogFooter>
        </DialogContent>
        <DialogTrigger className="w-full h-full">
            {children}
        </DialogTrigger>
    </Dialog>
}
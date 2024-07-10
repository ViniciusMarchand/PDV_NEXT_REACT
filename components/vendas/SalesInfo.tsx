import { useContext, useEffect, useState } from "react";
import GenericButton from "../common/GenericButton";

import ModalButton from "../common/ModalButton";
import ModalConfirmSales from "./ModalConfirmSales";

import CancelSalesModal from "./CancelSalesModal";
import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { CurrencyInput } from "react-currency-mask";
import { Input } from "../ui/input";

export default function SalesInfo() {
    const { sale, selectedProductsOnSalesPage } = useContext(ProductModalSalesFormContext);
    const [payment, setPayment] = useState<string>("");
    const [receivedValue, setReceivedValue] = useState<number>(0);
    const [enoughValue, setEnoughValue] = useState<boolean>(false);
    const [change, setChange] = useState<number>(0);

    const handleReceivedValue = (value: number) => {
        setReceivedValue(value);
    }

    useEffect(() => {
        if (receivedValue >= sale?.precoTotal || 0) {
            setEnoughValue(true);
        } else {
            setEnoughValue(false);
        }

        setChange(receivedValue - sale?.precoTotal || 0);
    }, [receivedValue, sale?.precoTotal]);

    return (
        <div className="w-full p-5 flex flex-col h-full justify-between fade">
            <div className="gap-2 flex flex-col">
                <p className="text-[18px]">Valor total: R$ {sale?.precoTotal || "00,00"}</p>
                <div>
                    <label>Forma de pagamento</label>
                    <Select
                        onValueChange={(value) => setPayment(value)}
                    >
                        <SelectTrigger className="w-full focus:ring-0 focus:ring-offset-0 border-gray-400 mt-1 fade-in">
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
                    <>
                        <div>
                            <label className="mb-2">Valor recebido</label>
                            {
                                !enoughValue && <p className="text-red-600 italic text-[12px]">Valor insuficiente</p>
                            }
                            <CurrencyInput
                                defaultValue={"0000"}
                                InputElement={<Input type="text" className={"mt-1 w-full focus-visible:ring-0 focus-visible:ring-offset-0  border-gray-400 " + (!enoughValue && "ring-red-600 ring-1 animate-pulse border-0 focus-visible:ring-1 focus-visible:ring-red-600 transition-opacity")} />}
                                onChangeValue={(event, originalValue, maskedValue) => {
                                    handleReceivedValue(Number(originalValue));
                                }}
                            />
                        </div>
                        {
                            enoughValue &&
                            <div>
                                <label className="mb-1">Troco</label>
                                <CurrencyInput
                                    defaultValue={"0000"}
                                    InputElement={<Input type="text" disabled className={"mt-1 w-full focus-visible:ring-0 focus-visible:ring-offset-0  border-gray-400 transition " + (!enoughValue && "ring-red-600 ring-1 animate-pulse border-0 focus-visible:ring-1 focus-visible:ring-red-600")} />}
                                    onChangeValue={(event, originalValue, maskedValue) => {

                                    }}
                                    value={change}
                                />
                            </div>
                        }
                    </>
                }
            </div>
            <div className="mb-10">
                <ModalConfirmSales payment={payment} setPayment={setPayment}>
                    <ModalButton value="Confirmar" className={"w-full max-h-[40px] cursor-not-allowed" + ((payment === "" || selectedProductsOnSalesPage.length === 0) && " hover:bg-terciaria")} disabled={true}/>
                </ModalConfirmSales>
                <div className="h-[35px] w-full mt-[10px]">
                    <CancelSalesModal>
                        <ModalButton value="Cancelar" className="full px-5 bg-red-500 hover:bg-red-600 h-[40px] cursor-not-allowed" />
                    </CancelSalesModal>
                </div>
            </div>
        </div>
    );
}
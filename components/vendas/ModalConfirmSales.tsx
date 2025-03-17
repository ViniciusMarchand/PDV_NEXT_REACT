'use client'
import { ReactNode, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import ConfirmSales from "./ConfirmSale";
import PrintAfterSale from "./PrintAfterSale";
import { delay } from "@/lib/utils";



export default function ModalConfirmSales(props: { children: ReactNode, payment: string, setPayment: Function, className?: string, isValid: boolean }) {

    const [isConfirmed, setIsConfirmed] = useState(false);
    const [result, setResult] = useState<any>();
    const [isOpen, setIsOpen] = useState(false);

    const { children, payment, setPayment, isValid } = props;


    return <Dialog open={isOpen} onOpenChange={async () => {await delay(1000); setIsConfirmed(false)}}>
        <DialogContent>
            {
                !isConfirmed ?
                <ConfirmSales 
                    setIsConfirmed={setIsConfirmed} 
                    setPayment={setPayment}  
                    payment={payment}
                    setResult={setResult}
                    setIsOpen={setIsOpen}
                /> :
                <PrintAfterSale sale={result.data} setIsOpen={setIsOpen} setIsConfirmed={setIsConfirmed}/>
            }
        </DialogContent> 
        <DialogTrigger className={"w-full h-[40px] " + ((!isValid) && " opacity-50 cursor-not-allowed")} disabled={!isValid} onClick={() => setIsOpen(true)}>
            {children}
        </DialogTrigger>
    </Dialog>
}
import { Sale } from "@/global/Types";
import PrintButton from "../historico-vendas/CupomButton";
import { DialogDescription, DialogFooter, DialogTitle } from "../ui/dialog";
import { Button } from "../ui/button";
import { delay } from "@/lib/utils";

interface Props {
    sale:Sale
    setIsOpen:Function
    setIsConfirmed:Function
}

export default function PrintAfterSale({sale, setIsOpen, setIsConfirmed} : Props) {
    return <>
        <DialogTitle className="text-2xl">
            Venda concluída!
        </DialogTitle>
        <DialogDescription className="text-black">
            Deseja imprimir o cupom <span className="font-bold">não</span> fiscal?
        </DialogDescription>
        <DialogFooter>
            <Button className="w-[90px] bg-red-500 hover:bg-red-600" onClick={async () => {setIsOpen(false);await delay(1000);setIsConfirmed(false)}}>
                Sair
            </Button>
            <PrintButton saleProp={sale}>
                <Button className="w-[90px]">
                    Imprimir
                </Button>
            </PrintButton>
        </DialogFooter>
    </>
}
import { ReactNode } from "react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
type Props = {
    children: string | JSX.Element | JSX.Element[]
}
export default function ModalConfirmSales({children}:Props) {
    return <Dialog>
        <DialogContent>
            <div>teste</div>
        </DialogContent>
        <DialogTrigger className="w-full h-full">
            {children}
        </DialogTrigger>
    </Dialog>
}
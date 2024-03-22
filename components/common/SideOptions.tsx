import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogTrigger } from "../ui/alert-dialog";

export default function SideOptions() {
    return <div className="w-sidebar bg-secundaria h-full sticky float-end shadow-md">
        <p>Configurações produto</p>
        <AlertDialog>
            <AlertDialogContent>
                oi
            <AlertDialogCancel>
                cancel
            </AlertDialogCancel>
            </AlertDialogContent>
            <AlertDialogTrigger>
                teste
            </AlertDialogTrigger>
        </AlertDialog>
    </div>
}
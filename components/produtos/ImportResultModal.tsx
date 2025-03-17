import { ImportReulst } from "@/global/Types";
import { AlertDialog, AlertDialogContent } from "../ui/alert-dialog";
import ImportResultContent from "./ImportResultContent";

interface Props {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    importResult: ImportReulst | undefined;
}


export default function ImportResultModal({ isOpen, setIsOpen, importResult }: Props) {

    if(!importResult) {
        return null;
    }
    
    return  <AlertDialog open={isOpen}>
        <AlertDialogContent className="bg-primaria max-w-[1000px]">
            <ImportResultContent setIsOpen={setIsOpen} importResult={importResult} />
        </AlertDialogContent>
    </AlertDialog>
}
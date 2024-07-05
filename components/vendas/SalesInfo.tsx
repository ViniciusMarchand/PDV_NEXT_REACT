import GenericButton from "../common/GenericButton";
import ModalButton from "../common/ModalButton";
import ModalConfirmSales from "./ModalConfirmSales";

export default function SalesInfo() {
    
    return (
        <div className="w-full p-5 flex gap-5">
            <div className="h-[40px] w-full grow">
                <GenericButton value="Cancelar" className="full px-5 bg-red-500 hover:bg-red-600"/>
            </div>
            <ModalConfirmSales>
                    <ModalButton value="Confirmar" className="w-full"/>
            </ModalConfirmSales>
        </div>
    );
}
import GenericButton from "../common/GenericButton";

export default function SalesInfo() {
    return (
        <div className="w-full p-5 flex gap-5">
            <div className="h-[40px] w-full grow">
                <GenericButton value="Cancelar" className="full px-5 bg-red-500 hover:bg-red-600"/>
            </div>
            <div className="h-[40px] w-full grow">
                <GenericButton value="Confirmar" className="w-full"/>
            </div>
        </div>
    );
}
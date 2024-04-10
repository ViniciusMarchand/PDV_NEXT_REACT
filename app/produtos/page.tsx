import CardLayout from "@/components/common/CardLayout";
import AlertDialogProdutos from "@/components/produtos/AlertDialogProdutos";
import TabelaProdutos from "@/components/produtos/TabelaProdutos";

export default function produtos() {
    return <div className="flex flex-col w-full h-full">
        <div className="w-full h-[80px] mb-3">
            <CardLayout>
                <div className="h-full w-full flex justify-start items-center px-3  ">
                    <AlertDialogProdutos/>
                </div>
            </CardLayout>
        </div>
        <div className="w-full h-full">
            <CardLayout>
                    <TabelaProdutos/>
            </CardLayout>
        </div>
    </div>
        
}
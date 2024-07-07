import { useContext } from "react";
import CardLayout from "../common/CardLayout";
import ModalButton from "../common/ModalButton";
import { AlertDialogTrigger } from "../ui/alert-dialog";
import ProductTable from "./TableProducts";
import { ProductModalFormContext } from "@/contexts/ProductModalFormContext";

export default function ProductPage(props:{page: number}) {
    const {page} = props;
    const { key, statusToAdd } = useContext(ProductModalFormContext);
    return <>
        <div className="w-full h-[80px] mb-3">
            <CardLayout>
                <div className="h-full w-full flex justify-start items-center px-3  ">
                    <AlertDialogTrigger onClick={() => statusToAdd()}>
                        <div className="w-[200px] h-[35px]">
                            <ModalButton value="Adicionar Produto"  />
                        </div>
                    </AlertDialogTrigger>
                </div>
            </CardLayout>
        </div>
        <div className="h-[500px] grow">
            <CardLayout>
                <ProductTable key={key} page={page} />
            </CardLayout>
        </div>
    </>
}
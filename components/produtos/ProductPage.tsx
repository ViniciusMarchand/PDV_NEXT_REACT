import { useContext } from "react";
import CardLayout from "../common/CardLayout";
import ModalButton from "../common/ModalButton";
import { AlertDialogTrigger } from "../ui/alert-dialog";
import ProductTable from "./ProductsTable";
import { ProductModalFormContext } from "@/contexts/ProductModalFormContext";
import productApi from "@/api/productApi";
import { ToastContext } from "@/contexts/ToastContext";
import SearchBar from "../common/SearchBar";
import ImportPopOver from "./ImportPopOver";
import ExportProducts from "./ExportProducts";

export default function ProductPage() {
    const { key, statusToAdd, setSortBy, setSearchedName, searchItems } = useContext(ProductModalFormContext);

    return <>
        <div className="w-full h-[80px] mb-3">
            <CardLayout>
                <div className="h-full w-full flex justify-between items-center px-3 gap-3">
                    <div className="flex justify-start items-center w-full gap-4">
                        <AlertDialogTrigger onClick={() => statusToAdd()}>
                            <div className="w-[200px] h-[35px]">
                                <ModalButton value="Cadastrar Produto"  />
                            </div>
                        </AlertDialogTrigger>
                        <ImportPopOver />
                        <SearchBar setValue={setSortBy} setSearchedName={setSearchedName} onClick={() => searchItems()}/>
                    </div>
                    <div>
                        <ExportProducts/>
                    </div>
                </div>
            </CardLayout>
        </div>
        <div className="h-[500px] grow">
            <CardLayout>
                <ProductTable key={key} />
            </CardLayout>
        </div>
    </>
}
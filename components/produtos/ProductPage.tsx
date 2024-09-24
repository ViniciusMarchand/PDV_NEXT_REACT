import { useContext } from "react";
import CardLayout from "../common/CardLayout";
import ModalButton from "../common/ModalButton";
import { AlertDialogTrigger } from "../ui/alert-dialog";
import ProductTable from "./ProductsTable";
import { ProductModalFormContext } from "@/contexts/ProductModalFormContext";
import { Input } from "../ui/input";
import { AiFillFileAdd } from "react-icons/ai";
import productApi from "@/api/productApi";
import { ToastContext } from "@/contexts/ToastContext";
import { FaSearch } from "react-icons/fa";
import SearchBar from "../common/SearchBar";

export default function ProductPage() {
    const { key, statusToAdd, updateKey, sortBy, setSortBy, setSearchedName } = useContext(ProductModalFormContext);
    const {successToast, errorToast} = useContext(ToastContext);
    async function sendFile(e: React.ChangeEvent<HTMLInputElement>) {
        const file = (e.target as HTMLInputElement).files?.[0];
        if(file) {
            const formData = new FormData();
            formData.append('file', file);
            productApi.importCSV(formData).then(() => {
                successToast("Produtos importados com sucesso!");
                updateKey();
            }).catch((error) => {
                errorToast(error.message);
                updateKey();
            });
        }
    }

    return <>
        <div className="w-full h-[80px] mb-3">
            <CardLayout>
                <div className="h-full w-full flex justify-start items-center px-3 gap-3">
                    <AlertDialogTrigger onClick={() => statusToAdd()}>
                        <div className="w-[200px] h-[35px]">
                            <ModalButton value="Adicionar Produto"  />
                        </div>
                    </AlertDialogTrigger>
                    <div className="bg-terciaria hover:bg-terciaria2 transition w-[35px] h-[35px] rounded-sm cursor-pointer">
                        <Input id="files" type="file" className="hidden" onChange={(e) => sendFile(e)}/>
                        <label htmlFor="files" className="w-[35px] h-[35px] flex justify-center items-center cursor-pointer shadow-md" title="importar CSV">
                            <AiFillFileAdd color="fdfdfd" size={25}/>
                        </label>
                    </div>
                    <SearchBar setValue={setSortBy} setSearchedName={setSearchedName}/>
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
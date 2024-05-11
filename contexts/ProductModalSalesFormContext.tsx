import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog";
import { createContext, useContext, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContext } from "./ToastContext";
import { ProductInputs } from "@/global/Types";
import productApi from "@/api/productApi";
import GenericButton from "@/components/common/GenericButton";
export const ProductModalSalesFormContext = createContext<any>(null);

export const ProductModalFormSalesProvider = (props: { children: React.ReactNode }) => {
    const { children } = props;
    const [key, setKey] = useState("");

    const { successToast, errorToast } = useContext(ToastContext);

    const updateKey = () => {
        setKey(crypto.randomUUID());
    };

    return (
        <ProductModalSalesFormContext.Provider value={{
            updateKey,
            key
        }}>
            <AlertDialog>
                <div className="w-[900px]">
                <AlertDialogContent >
                    <div className="h-[900px]">
                        <AlertDialogHeader className="h-[30px]">
                            <h1 className="text-[20px]"> Produto</h1>
                        </AlertDialogHeader>
                        <div className="px-5 w-full bg-primaria h-[800px]">
                            aaaaaa
                        </div>
                        <AlertDialogFooter className="h-[30px]">
                            <div className="w-[110px]">
                                <GenericButton fontSize="15px" value="Confirmar" />
                            </div>
                            <AlertDialogCancel>
                                Cancelar
                            </AlertDialogCancel>
                        </AlertDialogFooter>

                    </div>
                </AlertDialogContent>
                </div>
                {children}
            </AlertDialog>
        </ProductModalSalesFormContext.Provider>
    )
}
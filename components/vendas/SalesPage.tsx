'use client'
import { useEffect, useState } from "react";
import CardLayout from "../common/CardLayout";
import ProductsTableSales from "./ProductsTableSales";
import { ProductInputs } from "@/global/Types";
import productApi from "@/api/productApi";
import { AlertDialog, AlertDialogTrigger } from "../ui/alert-dialog";
import ModalButton from "../common/ModalButton";

export default function SalesPage() {
    const [productPageInfo, setProductPageInfo] = useState<ProductInputs[] | []>([]);

    useEffect(() => {
        productApi.get(0)
            .then(res => setProductPageInfo(res.data))
            .catch(error => error);
    }, []);

    return <>
        <div className="flex flex-col w-full h-full">
            <div className="w-full min-h-[80px] mb-3">
                <CardLayout>
                    <div className="h-full w-full flex justify-start items-center px-3  ">
                        <AlertDialogTrigger
                        // onClick={() => statusToAdd()}
                        >
                            <div className="w-[200px] h-[35px]">
                                <ModalButton value="Adicionar Produto" />
                            </div>
                        </AlertDialogTrigger>
                    </div>
                </CardLayout>
            </div>
            <div className="h-full">
                <CardLayout>
                    <div></div>
                    <ProductsTableSales productPageInfo={productPageInfo} />
                </CardLayout>
            </div>
        </div>
        <div className="h-full ml-3">
            <CardLayout>
                <div className="w-[400px]">

                </div>
            </CardLayout>
        </div>

    </>
}
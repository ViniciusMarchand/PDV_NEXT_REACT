'use client'
import CardLayout from "../common/CardLayout";
import ProductsTableSales from "./ProductsTableSales";
import { AlertDialogTrigger } from "../ui/alert-dialog";
import ModalButton from "../common/ModalButton";
import SalesInfo from "./SalesInfo";
import { useContext, useEffect } from "react";
import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";

export default function SalesPage() {

    

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
                    <ProductsTableSales />
                </CardLayout>
            </div>
        </div>
        <div className="h-full ml-3">
            <CardLayout>
                <div className="w-[350px] h-full flex flex-col">
                    <SalesInfo />
                </div>
            </CardLayout>
        </div>

    </>
}
import { ProductInputs } from "@/global/Types";
import PaginationBar from "../common/PaginationBar";
import { useContext, useState } from "react";
import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";

export default function ProductsTableSales(productPageInfo: any) {
    const paginationInfo = productPageInfo?.productPageInfo; 
    const productList = paginationInfo.content || [];
    
    const { selectedProductsOnSalesPage } = useContext(ProductModalSalesFormContext);

    return <div className="h-full w-full flex flex-col">
        <div className="grow max-h-full h-full px-3 my-3 overflow-y-auto">
            <table className="w-full text-center">
                <thead className="w-full [&>th]:py-2 sticky top-0 bg-[#fdfdfd] border-b">
                    <tr className="[&>th]:py-1">
                        <th>ID</th>
                        <th>DESCRIÇÃO</th>
                        <th>ESTOQUE</th>
                        <th>UNIDADE DE MEDIDA</th>
                        <th>PREÇO</th>
                        <th>CÓDIGO DE BARRAS</th>
                        <th>QTDE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectedProductsOnSalesPage.map((product: ProductInputs, i: number) => (
                            <tr key={i} className="border-t [&>td]:py-1">
                                <td>{product.id}</td>
                                <td>{product.descricao}</td>
                                <td>{product.estoque}</td>
                                <td>{product.unidadeMedida}</td>
                                <td>R$ {product.preco}</td>
                                <td>{product.codigoBarrasEAN13}</td>
                                <td>{product.quantidade}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <div className="w-full min-h-[70px] border-t">
            {
                // paginationInfo !== undefined &&
                // <PaginationBar pagination={paginationInfo} />
            }
        </div>
    </div>
}
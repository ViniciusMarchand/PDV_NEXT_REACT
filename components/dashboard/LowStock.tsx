'use client'

import { useCallback, useEffect, useState } from "react";
import CardLayout from "../common/CardLayout";
import { Pagination } from "@/global/Types";
import dashboardApi from "@/api/dashboardApi";
import Spinner from "../common/Spinner";
import PaginationBarSinglePage from "../common/PaginationBarSinglePage";

export default function LowStock() {
    const [data, setData] = useState<Pagination>();

    const changePage = useCallback(async (pageNumber: number) => {
        try {
            const res = await dashboardApi.lowStock(pageNumber);
            setData(res.data);
        } catch (error) {

        }
    }, []);

    useEffect(() => {
        changePage(0);
    }, [changePage]);

    return (
        <CardLayout>
            <div className="h-[300px] w-full flex flex-col justify-center items-center p-5">
                {
                    data ? (
                        <div className="w-full h-[300px] flex flex-col justify-between items-center">
                            <h2 className="font-semibold">PRODUTOS COM ESTOQUE BAIXO</h2>
                            <table className="w-full text-center">
                                <thead className="w-full py-2 sticky top-0 bg-[#fdfdfd] border-b">
                                    <tr className="py-1">
                                        <th>CÓDIGO</th>
                                        <th>DESCRIÇÃO</th>
                                        <th>ESTOQUE</th>
                                        <th>UN. MEDIDA</th>
                                        <th>COD. BARRAS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.content.map((product) => (
                                            <tr key={product.id} className="border-b">
                                                <td>{product.id}</td>
                                                <td className="max-w-[125px] overflow-hidden text-ellipsis whitespace-nowrap">
                                                    <p className="truncate">{product.descricao}</p>
                                                </td>
                                                <td>{product.estoque}</td>
                                                <td>{product.unidadeMedida}</td>
                                                <td>{product.codigoBarrasEAN13}</td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                            <PaginationBarSinglePage pagination={data} changePage={changePage} />
                        </div>
                    ) : <Spinner />
                }


            </div>
        </CardLayout>
    )

}
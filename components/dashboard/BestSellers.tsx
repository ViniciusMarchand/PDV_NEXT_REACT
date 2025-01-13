'use client'
import { ProductInputs } from "@/global/Types";
import CardLayout from "../common/CardLayout";
import { useCallback, useEffect, useState } from "react";
import dashboardApi from "@/api/dashboardApi";
import { DatePicker } from "../common/DatePicker";
import Table from "../common/Table.";

export default function BestSellers() {

    const [data, setData] = useState<ProductInputs[]>([]);

    const getData = useCallback(async (date: string) => {
        try {
            const response = await dashboardApi.bestSellers(date);
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    },[])

    return (
        <CardLayout>
            <div className="flex flex-col items-center w-full p-2">
                <h2 className="mb-3 font-bold">MAIS VENDIDOS</h2>
                <div className="mb-1">
                    <DatePicker onSearchDate={getData}/>
                </div>
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.Cell>ID</Table.Cell>
                            <Table.Cell>DESCRIÇÃO</Table.Cell>
                            <Table.Cell>UN. MEDIDA</Table.Cell>
                            <Table.Cell>ESTOQUE</Table.Cell>
                            <Table.Cell>PREÇO</Table.Cell>
                            <Table.Cell>COD. BARRAS</Table.Cell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            data.map(element => (
                                <Table.Row key={element.id}>
                                    <Table.Cell>{element.id}</Table.Cell>
                                    <Table.Cell>{element.descricao}</Table.Cell>
                                    <Table.Cell>{element.unidadeMedida}</Table.Cell>
                                    <Table.Cell>{element.estoque}</Table.Cell>
                                    <Table.Cell>{element.preco}</Table.Cell>
                                    <Table.Cell>{element.codigoBarrasEAN13}</Table.Cell>
                                </Table.Row>
                            ))
                        }
                    </Table.Body>
                </Table>
                {
                    data.length === 0 && (
                        <p className="text-gray-500 mt-1">Nenhum registro encontrado</p>
                    )
                }
            </div>
        </CardLayout>
    )
}
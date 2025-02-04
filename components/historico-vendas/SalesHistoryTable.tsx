import { Pagination, Sale } from "@/global/Types";
import Table from "../common/Table.";
import List from "../common/List";
import SalesHistoryRow from "./SalesHistoryRow";
import CardLayout from "../common/CardLayout";
import PaginationBar from "../common/PaginationBar";

interface Props {
    salesHistory: Sale[];
    pagination: Pagination | undefined;
}

export default function SalesHistoryTable({ salesHistory, pagination }: Props) {

    return <div className="flex flex-col w-full h-full max-h-full">
        <CardLayout>
            <div className="px-3 pt-3 flex flex-col justify-between h-full">
                <Table>
                    <Table.Header>
                        <Table.Row>
                            <Table.Cell>ID</Table.Cell>
                            <Table.Cell>PREÇO TOTAL</Table.Cell>
                            <Table.Cell>DATA INÍCIO</Table.Cell>
                            <Table.Cell>DATA CONCLUSÃO</Table.Cell>
                            <Table.Cell>FORMA DE PAGAMENTO</Table.Cell>
                            <Table.Cell>VENDEDOR</Table.Cell>
                            <Table.Cell>...</Table.Cell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        <List items={salesHistory} itemProp="sale" compoenent={SalesHistoryRow} />
                    </Table.Body>
                </Table>
                {
                    pagination !== undefined && pagination.page.totalPages > 1 &&
                    <div className="w-full border-t flex justify-center items-center pb-1 sticky bottom-0 bg-secundaria py-1 mb-1">
                        <PaginationBar pagination={pagination} href="/historico-vendas"/>
                    </div>
                }
            </div>
        </CardLayout>
    </div>


}
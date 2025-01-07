import { Sale } from "@/global/Types";
import Table from "../common/Table.";

interface Props {
    sale: Sale
}

export default function SalesHistoryRow({ sale }:  Props ) {
    return <Table.Row>
        <Table.Cell>{sale.id}</Table.Cell>
        <Table.Cell>{sale.precoTotal}</Table.Cell>
        <Table.Cell>{sale.dataHoraInicio}</Table.Cell>
        <Table.Cell>{sale?.dataHoraConclusao || "Venda não concluída"}</Table.Cell>
        <Table.Cell>{sale.formaPagamento || "Pagamento não efetuado"}</Table.Cell>
        <Table.Cell>{sale.vendedorNome}</Table.Cell>
    </Table.Row>
}
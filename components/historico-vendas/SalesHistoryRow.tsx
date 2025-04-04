import { Sale } from "@/global/Types";
import Table from "../common/Table.";
import CupomButton from "./CupomButton";
import { format } from "date-fns";
import { FaPrint } from "react-icons/fa";

interface Props {
    sale: Sale
}

export default function SalesHistoryRow({ sale }:  Props ) {
    
    return <Table.Row>
        <Table.Cell>{sale.id}</Table.Cell>
        <Table.Cell>
            R$ {sale.precoTotal.toLocaleString('pt-BR', {
		        maximumFractionDigits: 2,
	        })}
        </Table.Cell>
        <Table.Cell>{format(new Date(sale.dataHoraInicio), "dd/MM/yyyy HH:mm:ss")}</Table.Cell>
        <Table.Cell>{format(new Date(sale?.dataHoraConclusao), "dd/MM/yyyy HH:mm:ss") || "Venda não concluída"}</Table.Cell>
        <Table.Cell>{sale.formaPagamento || "Pagamento não efetuado"}</Table.Cell>
        <Table.Cell>{sale.vendedorNome}</Table.Cell>
        <Table.Cell>
            <CupomButton saleId={sale.id}>
                <FaPrint />
            </CupomButton>
        </Table.Cell>
        
    </Table.Row>
}
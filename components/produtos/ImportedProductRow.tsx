import { ImportProductResult, Sale } from "@/global/Types";
import Table from "../common/Table.";
import { format } from "date-fns";

interface Props {
    importedProduct: ImportProductResult
}

export default function ImportedProductRow({ importedProduct }:  Props ) {
    
    const { descricao, codigoBarras, erro } = importedProduct;

    return <Table.Row>
        <Table.Cell>{descricao}</Table.Cell>
        <Table.Cell>{codigoBarras}</Table.Cell>
        <Table.Cell>{erro}</Table.Cell>
    </Table.Row>
}
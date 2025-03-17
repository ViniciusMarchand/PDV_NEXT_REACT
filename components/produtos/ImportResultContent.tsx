import { ImportReulst } from "@/global/Types";
import CardLayout from "../common/CardLayout";
import Table from "../common/Table.";
import ImportedProductRow from "./ImportedProductRow";
import List from "../common/List";
import { Button } from "../ui/button";

interface Props {
    setIsOpen: (isOpen: boolean) => void;
    importResult: ImportReulst;
}

export default function ImportResultContent({ setIsOpen, importResult }: Props) {

    return <div className="flex flex-col h-full max-h-[500px] items-end justify-center overflow-auto">
    <CardLayout>
        <div className="px-3 pt-3 flex flex-col justify-between h-full p-5 items-center">
            <h1 className="text-2xl font-bold text-center text-terciaria">Resultado da importação</h1>
            <p className="text-center text-xl">Produtos salvos: <span className="text-green-700">{importResult.produtosSalvos}</span></p>
            <p className="text-center text-xl mb-3">Produtos com erro: <span className="text-red-700">{importResult.produtosComErro.length}</span></p>
            <h2 className="text-center text-xl mb-3">Erros:</h2>
            <Table>
                <Table.Header>
                    <Table.Row>
                        <Table.Cell>DESCRIÇÃO</Table.Cell>
                        <Table.Cell>CÓDIGO DE BARRAS</Table.Cell>
                        <Table.Cell>ERRO</Table.Cell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    <List items={importResult.produtosComErro} itemProp="importedProduct" compoenent={ImportedProductRow} />
                </Table.Body>
            </Table>
        <Button className="mt-5 w-[250px]" onClick={() => setIsOpen(false)}>Fechar</Button>
        </div>
    </CardLayout>
</div>
}
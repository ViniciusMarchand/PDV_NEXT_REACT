import { Item } from "@/global/Types";
import PaginationBar from "../common/PaginationBar";
import { useContext, useState } from "react";
import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";
import { FaRegTrashCan } from "react-icons/fa6";
import { Dialog, DialogTrigger } from "../ui/dialog";
import DeleteProductFromSalesDialog from "./DeleteProductFromSalesDialog";

export default function ProductsTableSales() {

    const { selectedProductsOnSalesPage } = useContext(ProductModalSalesFormContext);
    const [chosenProduct, setChosenProduct] = useState<Item>();

    const { key } = useContext(ProductModalSalesFormContext);

    return <div className="h-full w-full flex flex-col" key={key}>
        <Dialog>
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
                        <th colSpan={2}>QTDE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectedProductsOnSalesPage.map((item:Item, i: number) => (
                            
                            <tr key={i} className="border-t [&>td]:py-1 hover:bg-terciaria hover:text-textoContraste">
                                <td>{item.product.id}</td>
                                <td>{item.product.descricao}</td>
                                <td>{item.product.estoque}</td>
                                <td>{item.product.unidadeMedida}</td>
                                <td>R$ {item.product.preco}</td>
                                <td>{item.product.codigoBarrasEAN13}</td>
                                <td>{item.quantity }</td>
                                <td>                                               
                                    <DialogTrigger>
                                        <FaRegTrashCan title="Adicionar no carrinho de compra" size={18} className="cursor-pointer transition" onClick={() => setChosenProduct(item)}/>
                                    </DialogTrigger>
                                </td>
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
            <DeleteProductFromSalesDialog item={chosenProduct} />
        </Dialog>
    </div>
}
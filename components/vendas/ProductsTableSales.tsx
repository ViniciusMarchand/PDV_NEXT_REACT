import { Item } from "@/global/Types";
import { useContext, useState } from "react";
import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { Dialog, DialogTrigger } from "../ui/dialog";
import DeleteProductFromSalesDialog from "./DeleteProductFromSalesDialog";
import EditableQuantity from "./EditableQuantity";
import { GiConfirmed } from "react-icons/gi";
import { MdCancel } from "react-icons/md";

export default function ProductsTableSales() {

    const { selectedProductsOnSalesPage } = useContext(ProductModalSalesFormContext);
    const [chosenProduct, setChosenProduct] = useState<Item>();
    const [isEditing, setIsEditing] = useState(false);
    const [editingProductId, setEditingProductId] = useState<number | undefined>(0);


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
                        <th>QTDE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectedProductsOnSalesPage.map((item:Item, i: number) => (
                            
                            <tr key={i} className="border-t [&>td]:py-1 [&>td>input]:hover:text-[#333] hover:bg-terciaria hover:text-textoContraste">
                                <td>{item.product.id}</td>
                                <td>{item.product.descricao}</td>
                                <td>{item.product.estoque}</td>
                                <td>{item.product.unidadeMedida}</td>
                                <td>R$ {item.product.preco}</td>
                                <td>{item.product.codigoBarrasEAN13}</td>
                                <td className="flex items-center justify-around">
                                    {isEditing && editingProductId === item.product.id ? <EditableQuantity item={item}/> : item.quantity} 
                                </td>
                                <td>
                                    <div className="flex justify-center ">
                                        {
                                            editingProductId === item.product.id ?
                                            <>
                                                <GiConfirmed 
                                                    className="transition mr-1 cursor-pointer"
                                                    size={18}
                                                    title="Confirmar edição"
                                                />
                                                <MdCancel 
                                                    className="cursor-pointer transition"
                                                    size={18}
                                                    title="Cancelar edição"
                                                />
                                            </>
                                            :
                                            <>
                                                <FaRegPenToSquare 
                                                    className="transition mr-1 cursor-pointer"
                                                    size={18}
                                                    onClick={() => {setIsEditing(true); setEditingProductId(item.product.id)}}
                                                /> 
                                                <DialogTrigger>
                                                    <FaRegTrashCan title="Adicionar no carrinho de compra" size={18} className="cursor-pointer transition" onClick={() => setChosenProduct(item)}/>
                                                </DialogTrigger>
                                            </>

                                        }
                                    </div>                                               
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <DeleteProductFromSalesDialog item={chosenProduct} />
        </Dialog>
    </div>
}
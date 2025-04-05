import { Item } from "@/global/Types";
import { useContext, useState } from "react";
import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";
import { Dialog, DialogTrigger } from "../ui/dialog";
import DeleteProductFromSalesDialog from "./DeleteProductFromSalesDialog";
import EditableQuantity from "./EditableQuantity";
import { ToastContext } from "@/contexts/ToastContext";
import salesApi from "@/api/salesApi";
import FaRegPenCustom from "../icons/FaRegPenCustom";
import FaRegTrashCanCustom from "../icons/FaRegTrashCanCustom";
import GiCancelCustom from "../icons/GiCancelCustom";
import GiConfirmedCustom from "../icons/GiConfirmedCustom";
import TableProductImage from "../common/TableProductImage";
import Image from 'next/image';

export default function ProductsTableSales() {
  const { selectedProductsOnSalesPage, updateProductsFromSales } = useContext(
    ProductModalSalesFormContext
  );
  const [chosenProduct, setChosenProduct] = useState<Item>();
  const [isEditing, setIsEditing] = useState(false);
  const [editingProductId, setEditingProductId] = useState<number | undefined>(
    0
  );
  const [newQuantity, setNewQuantity] = useState("0");
  const { successToast, errorToast } = useContext(ToastContext);

  const updateQuantity = async (
    productId: number,
    quantity: string,
    stock: number
  ) => {
    try {
      let numberQuantity: number;
      if (quantity === "") numberQuantity = 1;
      else numberQuantity = parseInt(quantity);

      if (numberQuantity > stock) {
        throw new Error("Quantidade maior que o estoque!");
      }

      await salesApi.editItem(productId, numberQuantity);
      successToast("Quantidade atualizada com sucesso!");
      updateProductsFromSales();
    } catch (error: any) {
      errorToast(error.message);
    }
  };

  const { key } = useContext(ProductModalSalesFormContext);

  return (
    <div className="h-full w-full flex flex-col" key={key}>
      <Dialog>
        <div className="grow max-h-full h-full px-3 my-3 overflow-y-auto">
          {selectedProductsOnSalesPage.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full w-full text-center text-gray-300 text-lg font-semibold">
                <Image
                    src={"/imgs/logo-colorido-horizontal.png"}
                    width={500}
                    height={500}
                    className="opacity-20"
                    alt={'ferragem-avila-logo-horizontal-colorido-png'}
                />
                <p>
                    Para iniciar uma nova venda, adicione um produto.
                </p>
            </div>
          ) : (
            <table className="w-full text-center">
              <thead className="w-full [&>th]:py-2 sticky top-0 bg-[#fdfdfd] border-b">
                <tr className="[&>th]:py-1">
                  <th>ITEM</th>
                  <th>IMAGEM</th>
                  <th>DESCRIÇÃO</th>
                  <th>ESTOQUE</th>
                  <th>UNIDADE DE MEDIDA</th>
                  <th>PREÇO</th>
                  <th>CÓDIGO DE BARRAS</th>
                  <th>QTDE</th>
                </tr>
              </thead>
              <tbody>
                {selectedProductsOnSalesPage.map((item: Item, i: number) => (
                  <tr
                    key={i}
                    className="group border-t [&>td]:py-1 [&>td>input]:hover:text-[#333] [&>td>div>span]:hover:text-textoContraste hover:bg-terciaria hover:text-textoContraste"
                  >
                    <td>{i + 1}</td>
                    <td>
                      <TableProductImage
                        src={
                          typeof item.product?.imagem === "string" ||
                          item.product?.imagem === undefined ||
                          item.product.imagem === null
                            ? item.product.imagem
                            : undefined
                        }
                      />
                    </td>
                    <td>
                      <span className=" text-left ">
                        {item.product.descricao}
                      </span>
                    </td>
                    <td className="tabular-numbers">{item.product.estoque}</td>
                    <td>{item.product.unidadeMedida}</td>
                    <td className="tabular-numbers">
                      R$ {item.product.preco.toLocaleString('pt-BR', {
                          maximumFractionDigits: 2,
                        })}
                    </td>
                    <td className="tabular-numbers">{item.product.codigoBarrasEAN13 || '-------------'}</td>
                    <td className="flex items-center justify-around">
                      {isEditing && editingProductId === item.product.id ? (
                        <EditableQuantity
                          item={item}
                          setNewQuantity={setNewQuantity}
                        />
                      ) : (
                        item.quantity
                      )}
                    </td>
                    <td>
                      <div className="flex justify-center gap-1">
                        {editingProductId === item.product.id ? (
                          <>
                            <GiCancelCustom
                              onClick={() => {
                                setIsEditing(false);
                                setEditingProductId(0);
                              }}
                            />
                            <GiConfirmedCustom
                              onClick={() => {
                                item.id &&
                                  updateQuantity(
                                    item.id,
                                    newQuantity,
                                    item.product.estoque
                                  );
                                setIsEditing(false);
                                setEditingProductId(0);
                              }}
                            />
                          </>
                        ) : (
                          <>
                            <FaRegPenCustom
                              onClick={() => {
                                setIsEditing(true);
                                setEditingProductId(item.product.id);
                              }}
                            />
                            <DialogTrigger>
                              <FaRegTrashCanCustom
                                title="Remover"
                                onClick={() => setChosenProduct(item)}
                              />
                            </DialogTrigger>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <DeleteProductFromSalesDialog item={chosenProduct} />
      </Dialog>
    </div>
  );
}

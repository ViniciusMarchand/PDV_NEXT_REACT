'use client'
import { useContext, useEffect, useState } from "react";
import PaginationBar from "../common/PaginationBar";
import { ProductInputs } from "@/global/Types";
import { ProductModalFormContext } from "@/contexts/ProductModalFormContext";
import { Dialog, DialogTrigger } from "../ui/dialog";
import DeleteProductDialog from "./DeleteProductDialog";
import { AlertDialogTrigger } from "../ui/alert-dialog";
import HighlightText from "../common/HighlightText";
import productApi from "@/api/productApi";
import FaRegPenCustom from "../icons/FaRegPenCustom";
import FaRegTrashCanCustom from "../icons/FaRegTrashCanCustom";
import TableProductImage from "../common/TableProductImage";
import EditStockModal from "./EditStockModal";

export default function ProductTable() {

  const [chosenProduct, setChosenProduct] = useState<ProductInputs>();
  const { statusToEdit, pagination, searchedName } = useContext(ProductModalFormContext);
  const [products, setProducts] = useState<ProductInputs[]>([]);

  useEffect(() => {
    setProducts(pagination?.content || []);
  }, [pagination]);

  const updateTable = (number:Number, id: number) => {
    const updatedProducts = products.map(product => {
      if (product.id === id) {
        product.estoque = Number(number);
      }
      return product;
    });

    setProducts(updatedProducts);
  }

  return <div className="w-full px-3  pt-3 max-h-full overflow-y-auto flex flex-col justify-between h-full">
    <div>
      <Dialog>
        <table className="w-full text-center h-full overflow-y-scroll">
          <thead className="w-full [&>th]:py-2">
            <tr className="[&>th]:py-1">
              <th>CÓDIGO</th>
              <th>IMAGEM</th>
              <th>DESCRIÇÃO</th>
              <th>ESTOQUE</th>
              <th>UNIDADE DE MEDIDA</th>
              <th>PREÇO</th>
              <th>CÓDIGO DE BARRAS</th>
            </tr>
          </thead>
          <tbody>
            {
              products?.map((product, i) => (

                <tr key={i} className="group border-t [&>td]:py-1 [&>td>input]:hover:text-[#333] hover:bg-terciaria hover:text-textoContraste [&>td>div>span]:hover:text-textoContraste">
                  <td className="tabular-numbers">{product.id}</td>
                  <td><TableProductImage src={
                    typeof product?.imagem === 'string' ||
                      product?.imagem === undefined ||
                      product.imagem === null ?
                      product.imagem : undefined} />
                  </td>
                  <td>
                    <HighlightText text={product.descricao} term={searchedName} />
                  </td>
                  <td >
                    {product.estoque}
                  </td>
                  <td>{product.unidadeMedida}</td>
                  <td className="tabular-numbers">
                    R$ {product.preco.toLocaleString('pt-BR', {
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td className="tabular-numbers">{product.codigoBarrasEAN13 || '-------------'}</td>

                  <td onClick={() => setChosenProduct(product)} className="flex w-full h-full gap-2">
                    <EditStockModal product={product} updateTable={updateTable} oldStock={product.estoque}/>
                    <AlertDialogTrigger title="Editar" onClick={() => statusToEdit(product)}>
                      <FaRegPenCustom />
                    </AlertDialogTrigger>
                    <DialogTrigger title="Deletar">
                      <FaRegTrashCanCustom />
                    </DialogTrigger>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
        <DeleteProductDialog product={chosenProduct} />
      </Dialog>
    </div>
    <div className="w-full border-t flex justify-center items-center pb-1 sticky bottom-0 bg-secundaria">
      {
        pagination !== undefined &&
        <PaginationBar pagination={pagination} />
      }
    </div>
  </div>
}
'use client'
import { useContext, useEffect, useState } from "react";
import PaginationBar from "../common/PaginationBar";
import { ProductInputs } from "@/global/Types";
import { ProductModalFormContext } from "@/contexts/ProductModalFormContext";
import { Dialog, DialogTrigger } from "../ui/dialog";
import DeleteProductDialog from "./DeleteProductDialog";
import { AlertDialogTrigger } from "../ui/alert-dialog";
import HighlightText from "../common/HighlightText";
import EditableQuantity from "./EditableQuantity";
import productApi from "@/api/productApi";
import FaRegPenCustom from "../icons/FaRegPenCustom";
import FaRegTrashCanCustom from "../icons/FaRegTrashCanCustom";
import GiConfirmedCustom from "../icons/GiConfirmedCustom";
import GiCancelCustom from "../icons/GiCancelCustom";
import TableProductImage from "../common/TableProductImage";

export default function ProductTable() {

  const [chosenProduct, setChosenProduct] = useState<ProductInputs>();
  const { statusToEdit, pagination, searchedName } = useContext(ProductModalFormContext);
  const [editingProductId, setEditingProductId] = useState<number>(0);
  const [newQuantity, setNewQuantity] = useState('0');
  const [products, setProducts] = useState<ProductInputs[]>([]);

  useEffect(() => {
    setProducts(pagination?.content || []);    
  }, [pagination]);

  const updateQuantity = async (id: number, newQuantity: string) => {

    if(newQuantity === '0') return;

    try {
      await productApi.editQuantity(id, newQuantity);
      const updatedProducts = products.map(product => {
        if(product.id === id) {
          product.estoque = Number(newQuantity);
        }
        return product;
      });

      setProducts(updatedProducts);
    } catch (error: any) {
      console.error(error.message);
    }
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
                  <td>{product.id}</td>
                  <td><TableProductImage src={
                    typeof product?.imagem === 'string' || 
                    product?.imagem === undefined || 
                    product.imagem === null ? 
                    product.imagem : undefined}/>
                  </td>
                  <td>
                    <HighlightText text={product.descricao} term={searchedName}/>
                    </td>
                  <td >
                    {
                      editingProductId === product.id ?
                      <div className="flex items-center justify-center">
                        <EditableQuantity product={product} setNewQuantity={setNewQuantity}/>
                        <GiCancelCustom  
                            onClick={() => setEditingProductId(0)}
                        />
                        <GiConfirmedCustom
                            onClick={() => {product.id && updateQuantity(product.id, newQuantity); setEditingProductId(0)}}
                        />
                      </div>
                      :
                      <div className="flex items-center h-full justify-center">
                        {product.estoque}
                        <FaRegPenCustom onClick={() => setEditingProductId(product.id || 0)} />
                      </div>


                    }
                  </td>
                  <td>{product.unidadeMedida}</td>
                  <td>
                    R$ {product.preco.toLocaleString('pt-BR', {
                      maximumFractionDigits: 2,
                    })}
                  </td>
                  <td>{product.codigoBarrasEAN13}</td>
                  <td onClick={() => setChosenProduct(product)} className="flex w-full h-full">
                    <AlertDialogTrigger className="mr-1" title="Editar" onClick={() => statusToEdit(product)}>
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
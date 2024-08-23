'use client'
import { useContext, useEffect, useRef, useState } from "react";
import PaginationBar from "../common/PaginationBar";
import productApi from "@/api/productApi";
import { ProductInputs } from "@/global/Types";
import { ProductModalFormContext } from "@/contexts/ProductModalFormContext";
import { FaRegPenToSquare, FaRegTrashCan } from "react-icons/fa6";
import { Dialog, DialogTrigger } from "../ui/dialog";
import DeleteProductDialog from "./DeleteProductDialog";
import { useRouter } from "next/navigation";
import { AlertDialogTrigger } from "../ui/alert-dialog";

export default function ProductTable(props: { page: number }) {

  const page = props.page;
  const [pagination, setPagination] = useState();
  const [productList, setProductList] = useState<ProductInputs[]>();
  const [chosenProduct, setChosenProduct] = useState<ProductInputs>();
  const { statusToEdit } = useContext(ProductModalFormContext);
  const router = useRouter();

  useEffect(() => {
    productApi.get(page).then(res => {
      const {content} = res.data; 
      if(content.length === 0) {
        router.push("0");
      }
      setProductList(res.data.content);
      setPagination(res.data);
    });
  }, [page, router]);

  return <div className="w-full p-3 max-h-full overflow-y-auto flex flex-col">
    <div>
      <Dialog>
        <table className="w-full text-center h-full overflow-y-scroll">
          <thead className="w-full [&>th]:py-2">
            <tr className="[&>th]:py-1">
              <th>ID</th>
              <th>DESCRIÇÃO</th>
              <th>ESTOQUE</th>
              <th>UNIDADE DE MEDIDA</th>
              <th>PREÇO</th>
              <th>CÓDIGO DE BARRAS</th>
            </tr>
          </thead>
          <tbody>
            {
              productList?.map((product, i) => (

                <tr key={i} className="border-t [&>td]:py-1">
                  <td>{product.id}</td>
                  <td>{product.descricao}</td>
                  <td>{product.estoque}</td>
                  <td>{product.unidadeMedida}</td>
                  <td>R$ {product.preco}</td>
                  <td>{product.codigoBarrasEAN13}</td>
                  <td onClick={() => setChosenProduct(product)} className="flex w-full h-full">
                    <AlertDialogTrigger className="mr-1" title="Editar" onClick={() => statusToEdit(product)}>
                      <FaRegPenToSquare className="hover:text-terciaria transition"/>
                    </AlertDialogTrigger>
                    <DialogTrigger title="Deletar">
                      <FaRegTrashCan className="hover:text-terciaria transition"/>
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
    <div className="w-full flex justify-center items-end">
      {
        pagination !== undefined &&
        <PaginationBar pagination={pagination} />
      }
    </div>
  </div>
}
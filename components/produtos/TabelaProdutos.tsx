'use client'
import { useContext, useEffect, useRef, useState } from "react";
import PaginationBar from "../common/PaginationBar";
import apiProduto from "@/api/produtoApi";
import { ProdutoInputs } from "@/global/Types";
import { ProductModalFormContext } from "@/contexts/ProductModalFormContext";

export default function TabelaProdutos(props:{page:number}) {

  const page = props.page;
  const [pagination, setPagination] = useState();
  const [pageSize, setPageSize] = useState<Number>(0);
  const [productList, setProductList] = useState<ProdutoInputs[]>();
  const { teste } = useContext(ProductModalFormContext);

  useEffect(() => {
    apiProduto.getApi(page).then(res => {
      setProductList(res.data.content);
      setPagination(res.data);
    });
  }, [page]);

  return <div className="w-full p-3   max-h-full overflow-y-auto ">
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
              <td>{product.preco}</td>
              <td>{product.codigoBarrasEAN13}</td>
            </tr>
          ))
        }

      </tbody>
    </table>
    <div className="w-full flex justify-center items-end">
      {
        pagination !== undefined &&
        <PaginationBar pagination={pagination} />
      }
    </div>
  </div>
}
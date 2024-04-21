'use client'
import { useEffect, useRef, useState } from "react";
import PaginationBar from "../common/PaginationBar";
import apiProduto from "@/api/produtoApi";
import { ProdutoInputs } from "@/global/Types";

export default function TabelaProdutos(props: { divHeight: Number}) {
  const ref = useRef<HTMLTableRowElement>(null);
  const { divHeight } = props;
  const [height, setHeight] = useState(0);
  const [pagination, setPagination] = useState();
  const [pageSize, setPageSize] = useState<Number>(0);
  const [productList, setProductList] = useState<ProdutoInputs[]>();

  useEffect(() => {
    if (ref) {
      setHeight(Number(ref.current?.offsetHeight));
    }
  }, [ref]);

  useEffect(() => {
    const divisao = Math.trunc((Number(divHeight) - height * 3) /height);
    setPageSize(divisao);
    
  },[divHeight, height]);

  useEffect(() => {
    apiProduto.getApi(0, pageSize).then(res => {
      setProductList(res.data.content);
      setPagination(res.data);
    });
  },[pageSize]);

  return <div className="w-full p-3">
    <table className="w-full text-center h-full">
      <thead className="w-full [&>th]:py-2">
        <tr className="[&>th]:py-1" ref={ref}>
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
    <div className="w-full h-full flex justify-center items-end">
      {
        pagination !== undefined &&
        <PaginationBar pagination={pagination}/>
      }
    </div>
  </div>
}
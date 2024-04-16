'use client'
import { useEffect, useRef, useState } from "react";
import PaginationBar from "../common/PaginationBar";

export default function TabelaProdutos(props: { divHeight: Number}) {
  const ref = useRef<HTMLTableRowElement>(null);
  const { divHeight } = props;
  const [height, setHeight] = useState(0);
  const [teste, setTeste] = useState<Number[]>([]);
  useEffect(() => {
    if (ref) {
      setHeight(Number(ref.current?.offsetHeight));
    }
  }, [ref]);

  useEffect(() => {
    const divisao = Math.trunc((Number(divHeight) - height * 3) /height);
    setTeste([]);
    for(let i = 0; i<divisao; i++) {
      setTeste(current=> [...current, 1]);
    }
    
  },[divHeight, height]);

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
          teste.map((elemento, i) => (
            
            <tr key={i} className="border-t [&>td]:py-1">
              <td>The Sliding Mr. Bones</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    <div className="w-full h-full flex justify-center items-end">
      <PaginationBar/>
    </div>
  </div>
}
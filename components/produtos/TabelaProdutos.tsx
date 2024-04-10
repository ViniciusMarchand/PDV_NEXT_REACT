'use client'
import { useEffect, useRef, useState } from "react";

export default function TabelaProdutos() {

  const teste = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<Number>();
  const [height, setHeight] = useState<Number>();
  useEffect(() => {
    if (ref) {
      setWidth(ref.current?.offsetWidth);
      setHeight(ref.current?.offsetHeight);
    }
  }, [ref]);
  console.warn(height)

  return <div className="w-full p-3" ref={ref}>
    <table className="w-full text-center h-full">
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
          teste.map((elemento, i) => (
            <tr key={i} className="border-t [&>td]:py-2">
              <td>The Sliding Mr. Bones</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>
}
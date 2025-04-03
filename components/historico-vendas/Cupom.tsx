import { clientInfo } from "@/constants/env";
import { Sale } from "@/global/Types";
import { format } from "date-fns";
import React from "react";
import Image from 'next/image';

interface Props {
  sale: Sale;
}

const Cupom = ({ sale }: Props) => {

  const { cnpj, city, neighborhood, number, state, street, cep, phone } = clientInfo;
  const date = format(new Date(sale.dataHoraConclusao), "dd/MM/yyyy");

  const hour = format(new Date(sale.dataHoraConclusao), "HH:mm:ss");


  
  return (
    <div style={{ 
        width: "100vw", 
        fontFamily: "monospace", 
        fontSize: "14px",
        letterSpacing: "-0.8px",
        // padding: "5px",
        boxSizing: "border-box"
      }}>
        <div style={{ textAlign: "center" }}>
          <Image src="/imgs/logo-horizontal-preto.png" width={200} height={70} alt="logo" priority />
        </div>
        <p style={{ lineHeight: 0.3, textAlign: "center" }}>CNPJ: {cnpj}</p>
        <p style={{ lineHeight: 0.3, textAlign: "center" }}>{street}, {number}</p>
        <p style={{ lineHeight: 0.3, textAlign: "center" }}>{neighborhood}</p>
        <p style={{ lineHeight: 0.3, textAlign: "center" }}>{cep} - {city}, {state}</p>
        <p style={{ lineHeight: 0.3, textAlign: "center" }}>Telefone: {phone}</p>
        <div style={{ width: "100%", borderBottom: "1px dashed black", margin: "5px 0" }}></div>

        <p style={{ lineHeight: 0, textAlign: "center" }}>{date} {hour}</p>
        <h2 style={{ lineHeight: 0.5, textAlign: "center" }}>CUPOM NÃO FISCAL</h2>
        <div style={{ width: "100%", borderBottom: "1px dashed black", margin: "5px 0 15px 0" }}></div>
  
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: "12px" }}>
          <thead> 
            <tr>
              <th style={{ textAlign: "left" }}>Item</th>
              <th style={{ textAlign: "left" }}>Qtd.</th>
              <th style={{ textAlign: "left" }}>Vlr. Unit.</th>
              <th style={{ textAlign: "left" }}>Vlr. Total</th>
            </tr>
          </thead>
          <tbody>
            {
              sale.itens.map((item) => (
              <tr key={item.id}>
                <td style={{ textAlign: "left", borderBottom: "1px dashed rgba(0, 0, 0, 0.4)" }}>{item.produto.descricao}</td>
                <td style={{ textAlign: "left", borderBottom: "1px dashed rgba(0, 0, 0, 0.4)" }}>{item.quantidade}</td>
                <td style={{ textAlign: "left", borderBottom: "1px dashed rgba(0, 0, 0, 0.4)" }}>
                  R$ {item.precoUnitarioAtual.toLocaleString('pt-BR', {
                      maximumFractionDigits: 2,
                    })}
                </td>
                <td style={{ textAlign: "left", borderBottom: "1px dashed rgba(0, 0, 0, 0.4)" }}>
                  R$ {item.preco.toLocaleString('pt-BR', {
                      maximumFractionDigits: 2,
                    })}
                  </td>
              </tr>
              ))
            }
          </tbody>
        </table>
  
        <table style={{ width: "100%", fontSize: "14px" }}>
          <tbody>
            <tr>
              <td style={{ textAlign: "left" }}>Total:</td>
              <td></td>
              <td style={{ textAlign: "right", paddingRight: "20px" }}>
              R$ {sale.precoTotal.toLocaleString('pt-BR', {
              maximumFractionDigits: 2,
              })}
              </td>
            </tr>
          </tbody>
        </table>
  
        <p style={{ textAlign: "center", fontWeight: "bold", fontSize: "14px" }}>Forma de pagamento: {sale.formaPagamento}</p>
        <div style={{ width: "100%", borderBottom: "1px dashed black", margin: "10px 0" }}></div>
        <p style={{ textAlign: "center", marginTop: "10px" }}>EMITIDO POR FERRAGEM AVILA PDV</p>
      </div>
  );
};

export default Cupom;
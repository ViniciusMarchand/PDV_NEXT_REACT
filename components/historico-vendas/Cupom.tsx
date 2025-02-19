import { clientInfo } from "@/constants/env";
import { Sale } from "@/global/Types";
import { format } from "date-fns";
import React from "react";

interface Props {
    sale: Sale;
}

const Cupom = ({ sale }: Props) => {

  const { cnpj, city, neighborhood, number, state, street, cep, phone } = clientInfo;
  const date = format(new Date(sale.dataHoraConclusao), "dd/MM/yyyy");
  const hour = format(new Date(sale.dataHoraConclusao), "hh:mm:ss");

  console.warn("sale", sale);
  
  return (
    <div style={{ 
        width: "100vw", 
        fontFamily: "monospace", 
        fontSize: "10px", 
        padding: "0px",
        paddingRight: "0px",
        boxSizing: "border-box"
      }}>
        <h2 style={{ textAlign: "center" }}>Ferragem Avila</h2>
        <p style={{ textAlign: "center" }}>CNPJ: {cnpj}</p>
        <p style={{ textAlign: "center" }}>{street}, {number}</p>
        <p style={{ textAlign: "center" }}></p>
        <p style={{ textAlign: "center" }}>CEP {cep}</p>
        <p style={{ textAlign: "center" }}>{city}, {state}</p>
        <p style={{ textAlign: "center" }}>Telefone: {phone}</p>
        <div style={{ width: "100%", borderBottom: "1px dashed black", margin: "10px 0" }}></div>
        
        <p style={{ textAlign: "center" }}>Data: {date}</p>
        <p style={{ textAlign: "center" }}>Hora: {hour}</p>
        <div style={{ width: "100%", borderBottom: "1px dashed black", margin: "10px 0" }}></div>
        <h3 style={{ textAlign: "center" }}>**CUPOM NÃO FISCAL**</h3>
        <div style={{ width: "100%", borderBottom: "1px dashed black", margin: "10px 0" }}></div>
  
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead> 
            <tr style={{ borderBottom: "1px solid black", fontWeight: "bold" }}>
              <th style={{ textAlign: "left" }}>Produto</th>
              <th style={{ textAlign: "center" }}>Qtd</th>
              <th style={{ textAlign: "center" }}>Vlr. Unit.</th>
              <th style={{ textAlign: "center" }}>Vlr. Total</th>
            </tr>
          </thead>
          <tbody>
            {
              sale.itens.map((item) => (
              <tr key={item.id}>
                <td style={{ borderBottom: "1px dotted black" }}>{item.produto.descricao}</td>
                <td style={{ borderBottom: "1px dotted black" }}>{item.quantidade}</td>
                <td style={{ textAlign: "center", borderBottom: "1px dotted black" }}>
                  R$ {item.precoUnitarioAtual.toLocaleString('pt-BR', {
                      maximumFractionDigits: 2,
                    })}
                </td>
                <td style={{ textAlign: "center", borderBottom: "1px dotted black" }}>
                  R$ {item.preco.toLocaleString('pt-BR', {
                      maximumFractionDigits: 2,
                    })}
                  </td>
              </tr>
              ))
            }
          </tbody>
        </table>
  
        <table style={{ width: "100%", fontSize: "10px" }}>
          <tr>
            <td>Total:</td>
            <td></td>
            <td style={{ textAlign: "right" }}>
            R$ {sale.precoTotal.toLocaleString('pt-BR', {
            maximumFractionDigits: 2,
            })}
            </td>
          </tr>
        </table>
        <div style={{ width: "100%", borderBottom: "1px dashed black", margin: "10px 0" }}></div>
  
        <p style={{ textAlign: "center", fontWeight: "bold" }}>Forma de pagamento: {sale.formaPagamento}</p>
        <div style={{ width: "100%", borderBottom: "1px dashed black", margin: "10px 0" }}></div>
        <p style={{ textAlign: "center", marginTop: "10px" }}>EMITIDO POR FERRAGEM AVILA PDV</p>
      </div>
  );
};

export default Cupom;
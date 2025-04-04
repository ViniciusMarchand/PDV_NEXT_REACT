import productApi from "@/api/productApi";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import useToast from "@/hooks/useToast";
import useWebSocket from "@/hooks/useWebSocket";
import { delay } from "@/lib/utils";

interface Props {
  closePopover: () => void;
}

export default function NfeTab({closePopover} : Props) {

  const { successToast, errorToast } = useToast();
  const { connect } = useWebSocket();

  const sendFile = async (e: React.FormEvent<HTMLFormElement>) => {    
    e.preventDefault();
    try {
      closePopover();
      const requestXML = {
        chaveAcessoNfe: e.currentTarget.key.value,
        porcentagemAumentoPreco: e.currentTarget.percentage.value
      }
      connect();
      await delay(1000)
      await productApi.importXML(requestXML);
      successToast("Importando produto(s) via NFCe");
    } catch (error: any) {
      errorToast(error.message);
    }
  }

  return <form className="flex flex-col gap-y-5" onSubmit={sendFile}>
    <div>
      <label htmlFor="percentage">Porcentagem do aumento de preço</label>
      <Input id="percentage" placeholder="Insira a porcentagem..." type="number" required/>
    </div>
    <div>
      <label htmlFor="key">Chave de acesso NF-e</label>
      <Input id="key" placeholder="Insira a chave de acesso..." required/>
    </div>
      <Button type="submit" className="w-full">Importar produtos</Button>
    </form>
}
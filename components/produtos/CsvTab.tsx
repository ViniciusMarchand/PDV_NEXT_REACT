import useToast from "@/hooks/useToast";
import { Input } from "../ui/input";
import productApi from "@/api/productApi";
import useWebSocket from "@/hooks/useWebSocket";
import { delay } from "@/lib/utils";

interface Props {
  closePopover: () => void;
}

export default function CsvTab({ closePopover }: Props) {

  const { successToast, errorToast } = useToast();
  const { connect } = useWebSocket();

  const sendFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    connect();
  
    try {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        await delay(1000)
        productApi.importCSV(formData).then(() => {
          successToast("Importando produto(s) via CSV");
        }).catch((error: Error) => {
          errorToast(error.message);
        });
      }
    } catch (error: any) {
      errorToast(error.message);
    }

    closePopover();
  }

  return <div className="space-y-1">
    <Input id="files" type="file" className="hidden" onChange={(e) => sendFile(e)} />
    <label htmlFor="files" className="w-full h-[35px] flex justify-center items-center cursor-pointer shadow-md bg-terciaria rounded-md text-textoContraste" title="importar CSV">
      Selecione o seu arquivo
    </label>
  </div>
}
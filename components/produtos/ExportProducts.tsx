import useWebSocket from "@/hooks/useWebSocket";
import FaRegFileExcelCustom from "../icons/FaRegFileExcelCustom";
import { Button } from "../ui/button";
import productApi from "@/api/productApi";
import { delay } from "@/lib/utils";
import useToast from "@/hooks/useToast";
import Spinner from "../common/Spinner";
import { set } from "date-fns";


export default function ExportProducts() {

    const { connect, setIsLoadingExcel, isLoadingExcel } = useWebSocket();
    const { successToast, errorToast } = useToast();

    const requestProductsEXCEL = async () => {
        try {
            setIsLoadingExcel(true);
            connect();
            await delay(1000);
            const res = await productApi.exportProducts();

            if (res?.data && res.data !== "") {

                const blob = new Blob([res.data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

                if (blob.size < 40) {
                    return;
                }

                const url = window.URL.createObjectURL(blob);
                const link = document.createElement('a');
                link.href = url;

                link.setAttribute('download', `relatorio_produtos.xlsx`);

                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                setIsLoadingExcel(false);
                return;
            }

            successToast("Exportando produtos para Excel");

        } catch (error) {
            errorToast("Erro ao exportar produtos");
        }
    }

    return (
        <Button className="w-[35px] h-[35px] p-0" title="Exportar produtos" onClick={() => requestProductsEXCEL()} disabled={isLoadingExcel}>
            {isLoadingExcel ? <Spinner size={20} /> : <FaRegFileExcelCustom />}
        </Button>
    )
}
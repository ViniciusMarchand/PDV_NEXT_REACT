'use client'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTrigger } from "../ui/alert-dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProdutoInputs } from "@/global/Types";
import { CurrencyInput } from "react-currency-mask";
import ModalButton from "../common/ModalButton";
import GenericButton from "../common/GenericButton";
export default function AlertDialogProdutos() {

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<ProdutoInputs>();

    const onSubmit: SubmitHandler<ProdutoInputs> = (produto) => console.warn(produto);
    return <AlertDialog>
        <AlertDialogContent>
            <form onSubmit={handleSubmit(onSubmit)}>
                <AlertDialogHeader>
                    <h1 className="text-[20px]">Adicionar Produto</h1>
                </AlertDialogHeader>
                <div className="flex justify-between px-5 w-full flex-wrap">
                    <div className="w-full">
                        <label className="text-[18px]">Descrição</label>
                        <input type='text' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' {...register("descricao")} required />
                    </div>
                    <div className="w-[200px]">
                        <label className="text-[18px]">Estoque</label>
                        <input type='number' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' {...register("estoque")} required />
                    </div>
                    <div className="w-[200px]">
                        <label className="text-[18px]">Estoque</label>
                        <select className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' {...register("unidadeMedida")} required>
                            <option value="" disabled selected>unidade de medida</option>
                            <option value={"UNIDADE"}>Unidade</option>
                            <option value={"METRO"}>Metro</option>
                            <option value={"GRAMA"}>Grama</option>
                        </select>
                    </div>
                    <div className="w-[200px]">
                        <label className="text-[18px]">Preço Fornecedor</label>
                        <CurrencyInput
                            defaultValue={"0000"}
                            InputElement={<input type='text' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' required />}
                            onChangeValue={(event, originalValue, maskedValue) => { setValue("precoFornecedor", Number(originalValue)) }} />
                    </div>
                    <div className="w-[200px]">
                        <label className="text-[18px]">Preço</label>
                        <CurrencyInput
                            defaultValue={"0000"}
                            InputElement={<input type='text' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' required />}
                            onChangeValue={(event, originalValue, maskedValue) => { setValue("preco", Number(originalValue)) }} />
                    </div>
                    <div className="w-full">
                        <label className="text-[18px]">Descrição</label>
                        <input type='text' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' {...register("codigoBarrasEAN13")} required />
                    </div>
                </div>
                <AlertDialogFooter>
                    <div className="w-[110px]">
                        <GenericButton fontSize="15px" value="Adicionar"/>
                    </div>
                    <AlertDialogCancel>
                        Cancelar
                    </AlertDialogCancel>
                </AlertDialogFooter>
            </form>
        </AlertDialogContent>
        <AlertDialogTrigger>
            <div className="w-[200px] h-[35px]">
                <ModalButton value="Adicionar Produto" />
            </div>
        </AlertDialogTrigger>
    </AlertDialog>
}


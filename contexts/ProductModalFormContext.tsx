import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog";
import { createContext, useContext, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContext } from "./ToastContext";
import { ProductInputs } from "@/global/Types";
import { SubmitHandler, useForm } from "react-hook-form";
import productApi from "@/api/productApi";
import { CurrencyInput } from "react-currency-mask";
import GenericButton from "@/components/common/GenericButton";
import { productFormStatus } from "@/constants/enums";
export const ProductModalFormContext = createContext<any>(null);

export const ProductModalFormProvider = (props: { children: React.ReactNode }) => {
    const { children } = props;
    const [formStatus, setFormStatus] = useState(productFormStatus.Adicionar);
    const [maskedPrecoValue, setMaskedPrecoValue] = useState<number | string>('');
    const [maskedPrecoFornecedorValue, setMaskedPrecoFornecedorValue] = useState<number | string>('');

    const [selectedProduct, setSelectedProduct] = useState<ProductInputs>();
    const [key, setKey] = useState("");
    const teste = () => {
        alert("FOI");
    }

    const { successToast, errorToast } = useContext(ToastContext);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        reset,
        watch,
    } = useForm<ProductInputs>({
        defaultValues: {
            precoFornecedor: 0,
            preco: 0
        }
    });

    const onSubmit: SubmitHandler<ProductInputs> = (product) => {
        if (formStatus === productFormStatus.Adicionar) {
            productApi.post(product)
                .then(res => {
                    successToast("Produto adicionado com sucesso!");
                    reset();
                })
                .catch(error => errorToast("Erro ao adicionar produto!"))
                .finally(() => updateKey());
        }
        if (formStatus === productFormStatus.Editar) {
            if(selectedProduct?.id !== undefined)
            productApi.put(selectedProduct.id, product)
            .then(res => {
                successToast("Produto editado com sucesso!");
                reset();
            })
            .catch(error => errorToast("Erro ao editar produto!"))
            .finally(() => updateKey());
        }   
    };

    const updateKey = () => {
        setKey(crypto.randomUUID());
    };

    const statusToAdd = () => {
        setFormStatus(productFormStatus.Adicionar);
    };
    const statusToEdit = (product:ProductInputs) => {
        setFormStatus(productFormStatus.Editar);
        const {descricao, estoque, unidadeMedida, preco, precoFornecedor, codigoBarrasEAN13} = product;
        setValue("descricao", descricao);
        setValue("estoque", estoque);
        setValue("unidadeMedida", unidadeMedida);
        setValue("precoFornecedor", precoFornecedor);
        setMaskedPrecoFornecedorValue(precoFornecedor);
        setValue("preco", preco);
        setMaskedPrecoValue(preco);
        setValue("codigoBarrasEAN13", codigoBarrasEAN13);

        setSelectedProduct(product);
    };
    console.warn(watch());
  
    return (
        <ProductModalFormContext.Provider value={{
            teste,
            updateKey,
            key,
            statusToAdd,
            statusToEdit,
        }}>
            <AlertDialog>
                <AlertDialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <AlertDialogHeader>
                            <h1 className="text-[20px]">{formStatus} Produto</h1>
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
                                <label className="text-[18px]">Unidade de Medida</label>
                                <select className='text-[17px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' {...register("unidadeMedida")} required defaultValue={""}>
                                    <option value="" disabled>unidade de medida</option>
                                    <option value={"UNIDADE"}>Unidade</option>
                                    <option value={"METRO"}>Metro</option>
                                    <option value={"GRAMA"}>Grama</option>
                                </select>
                            </div>
                            <div className="w-[200px]">
                                <label className="text-[18px]">Preço Fornecedor</label>
                                <CurrencyInput
                                    value={maskedPrecoFornecedorValue}
                                    InputElement={<input  type='text' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' required />}
                                    onChangeValue={(event, originalValue, maskedValue) => { 
                                        setValue("precoFornecedor", Number(originalValue));
                                        setMaskedPrecoFornecedorValue(maskedValue); 
                                    }} />
                            </div>
                            <div className="w-[200px]">
                                <label className="text-[18px]">Preço</label>
                                <CurrencyInput
                                    value={maskedPrecoValue}
                                    InputElement={<input type='text' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' required />}
                                    onChangeValue={(event, originalValue, maskedValue) => { 
                                        setValue("preco", Number(originalValue));
                                        setMaskedPrecoValue(maskedValue);
                                    }} />
                            </div>
                            <div className="w-full">
                                <label className="text-[18px]">Código de Barras</label>
                                <input type='text' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' {...register("codigoBarrasEAN13")} required minLength={13} maxLength={13} />
                            </div>
                        </div>
                        <AlertDialogFooter>
                            <div className="w-[110px]">
                                <GenericButton fontSize="15px" value="Confirmar" />
                            </div>
                            <AlertDialogCancel>
                                Cancelar
                            </AlertDialogCancel>
                        </AlertDialogFooter>
                    </form>
                </AlertDialogContent>
                {children}
            </AlertDialog>
        </ProductModalFormContext.Provider>
    )
}
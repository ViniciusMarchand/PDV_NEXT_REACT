'uae client';
import { AlertDialog, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader } from "@/components/ui/alert-dialog";
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContext } from "./ToastContext";
import { ProductInputs } from "@/global/Types";
import { SubmitHandler, useForm } from "react-hook-form";
import productApi from "@/api/productApi";
import { CurrencyInput } from "react-currency-mask";
import { productFormStatus } from "@/constants/enums";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import Spinner from "@/components/common/Spinner";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
export const ProductModalFormContext = createContext<any>(null);

export const ProductModalFormProvider = (props: { children: React.ReactNode}) => {
    const { children } = props;
    const [open, setOpen] = useState(false);
    const [formStatus, setFormStatus] = useState(productFormStatus.Cadastrar);
    const [maskedPrecoValue, setMaskedPrecoValue] = useState<number | string>('0');
    const [maskedPrecoFornecedorValue, setMaskedPrecoFornecedorValue] = useState<number | string>('0');
    const [sortBy, setSortBy] = useState("id");
    const [searchedName, setSearchedName] = useState("");
    const [selectedProduct, setSelectedProduct] = useState<ProductInputs>();
    const [pagination, setPagination] = useState();
    const { successToast, errorToast } = useContext(ToastContext);
    const [page, setPage] = useState<number | undefined>(undefined);
    const [image, setImage] = useState<File | null>();
    const searchParams = useSearchParams();
    const [loading, setLoading] = useState(false);
    const [autoGenerateBarcode, setAutoGenerateBarcode] = useState(true);
    const [isBarcodeDisabled, setIsBarcodeDisabled] = useState(false);
    
    useEffect(() => {
        const newPage = searchParams?.get('page') || '';
        
        setPage(Number(newPage) - 1);
    }, [searchParams]) 
    
    useEffect(() => {
        if(page !== undefined && pagination === undefined ) 
        productApi.get(page, sortBy).then(res => {
            setPagination(res.data);
        });
    }, [page, pagination, sortBy]);

    const searchItems = useCallback(() => {
        if(searchedName !== "") {
            productApi.searchProduct(sortBy, searchedName)
            .then(res => {
                setPagination(res.data);
            })
        } else {
            setPagination(undefined);
        }
    }, [page, sortBy, searchedName]);

    useEffect(() => {
        searchItems();
    },[searchItems]);
    
    
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        watch,
    } = useForm<ProductInputs>({
        defaultValues: {
            precoFornecedor: 0,
            preco: 0,
            unidadeMedida: "UNIDADE"
        }
    });
    
    useEffect(() => {
        
    },[]);

    const onSubmit: SubmitHandler<ProductInputs> = (product) => {
        const formData = new FormData();

        const { codigoBarrasEAN13 } = product;

        if(loading) 
            return;

        Object.entries(product).forEach(([key, value]) => {
            if (value !== undefined && value !== null && key !== "imagem" && key !== "codigoBarrasEAN13") {
                formData.append(key, value.toString());
            }
        });
        
        if(image) {
            formData.append("imagem", image);
        }
        
        setLoading(true);

        if(autoGenerateBarcode && !codigoBarrasEAN13) {
            formData.append("gerarCodigoBarrasEAN13", "true");
            // formData.delete("codigoBarrasEAN13");
        } 

        if(codigoBarrasEAN13) {
            formData.append("codigoBarrasEAN13", codigoBarrasEAN13)
        }

        if (formStatus === productFormStatus.Cadastrar) {
            productApi.post(formData)
            .then(res => {
                successToast("Produto adicionado com sucesso!");
                clearForm();
                searchItems();
                setOpen(false);
            })
            .catch(error => errorToast("Erro ao adicionar produto!"))
            .finally(() => {
                setLoading(false);
                setMaskedPrecoValue('0');
                setMaskedPrecoFornecedorValue('0');
            });
        }
        
        if (formStatus === productFormStatus.Editar) {
            if(selectedProduct?.id !== undefined)
                productApi.put(selectedProduct.id, formData)
            .then(res => {
                successToast("Produto editado com sucesso!");
                clearForm();
                searchItems();
                setOpen(false);
            })
            .catch(error => errorToast("Erro ao editar produto!"))
            .finally(() => {
                setLoading(false);
                setMaskedPrecoValue('0');
                setMaskedPrecoFornecedorValue('0');
            });
        }   

    };

    const statusToAdd = () => {
        clearForm();
        setOpen(true);
    };
    
    const clearForm = () => {
        reset();
        setFormStatus(productFormStatus.Cadastrar);
        setMaskedPrecoValue('0');
        setMaskedPrecoFornecedorValue('0');
        setImage(null);
    }
    
    const statusToEdit = (product:ProductInputs) => {
        clearForm();
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
        setAutoGenerateBarcode(true);
        setOpen(true);
    };

    const codBarras = watch("codigoBarrasEAN13");

    useEffect(() => {
      if (codBarras) {
        setIsBarcodeDisabled(true);
        setAutoGenerateBarcode(false);
        
    } else {
        setIsBarcodeDisabled(false);
        setAutoGenerateBarcode(true);
      }
    }, [codBarras]);
    
    return (
        <ProductModalFormContext.Provider value={{
            statusToAdd,
            statusToEdit,
            setSortBy, 
            setSearchedName,
            searchedName,
            pagination,
            searchItems
        }}>
            <AlertDialog open={open} onOpenChange={setOpen}>
                <AlertDialogContent>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <AlertDialogHeader>
                            <h1 className="text-[20px] font-semibold px-5 mb-1">{formStatus} Produto</h1>
                        </AlertDialogHeader>
                        <div className="flex justify-between px-5 w-full flex-wrap">
                            <div className="w-full">
                                <label className="text-[18px]">Descrição</label>
                                <input type='text' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' {...register("descricao")} required />
                            </div>
                            {
                                !(formStatus == productFormStatus.Editar) && 
                                <div className="w-[200px]">
                                    <label className="text-[18px]">Estoque</label>
                                    <input type='number' className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' {...register("estoque")} required />
                                </div>
                            }
                            <div className={ formStatus === productFormStatus.Cadastrar ? "w-[200px]" : "w-full"}>
                                <label className="text-[18px]">Unidade de Medida</label>
                                <select className='text-[17px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria' {...register("unidadeMedida")} required defaultValue={""}>
                                    <option value="" disabled>Selecione...</option>
                                    <option value={"UNIDADE"}>Unidade</option>
                                    <option value={"METRO"}>Metro</option>
                                    <option value={"GRAMA"}>Grama</option>
                                </select>
                            </div>
                            <div className="w-full flex justify-between">
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
                            </div>
                            <div className="w-full">
                                <label className="text-[18px]">Código de Barras</label>
                                <input 
                                    type='text'
                                    className='text-[18px] border w-full h-[45px] focus:outline-none rounded-md mb-5 p-2 bg-secundaria'
                                    {...register("codigoBarrasEAN13")}
                                    minLength={13} 
                                    maxLength={13}
                                    onChange={(e) => {
                                        const value = e.target.value;
                                        setValue("codigoBarrasEAN13", value);
                                    }}
                                />
                            </div>
                            <div className="flex items-center space-x-2 mb-5">
                                <Checkbox
                                    id="terms"
                                    checked={autoGenerateBarcode}
                                    disabled={isBarcodeDisabled}
                                    onCheckedChange={(checked: any) => {
                                        if (!isBarcodeDisabled) setAutoGenerateBarcode(!!checked);
                                    }}
                                />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Gerar código de barras automaticamente
                                </label>
                            </div>

                            <div className="w-full mb-5">
                                <label className="text-[18px]">Imagem</label>
                                <Input id="image" type="file" className="cursor-pointer" onChange={(e) => { if (e.target.files) setImage(e.target.files[0]); }}/>
                            </div>
                        </div>
                        <AlertDialogFooter className="flex px-5">
                            <AlertDialogCancel>
                                Cancelar
                            </AlertDialogCancel>
                            <Button className="text-[14px] w-[110px]" disabled={loading}>
                                {loading ? <Spinner /> : "Confirmar"}
                            </Button>
                        </AlertDialogFooter>
                    </form>
                </AlertDialogContent>
                {children}
            </AlertDialog>
        </ProductModalFormContext.Provider>
    )
}
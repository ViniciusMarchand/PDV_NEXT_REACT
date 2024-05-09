'use client'
import ProductPage from "@/components/produtos/ProductPage";
import { ProductModalFormProvider } from "@/contexts/ProductModalFormContext";

export default function Produtos(props: any) {
  const page = (props.params.page - 1);

  return <div className="flex flex-col w-full h-full">
    <ProductModalFormProvider>
      <ProductPage page={page} />
    </ProductModalFormProvider>
  </div>

}
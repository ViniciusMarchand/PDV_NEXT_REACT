'use client'
import ProductPage from "@/components/produtos/ProductPage";
import { ProductModalFormProvider } from "@/contexts/ProductModalFormContext";

export default function Produtos() {

  return <div className="flex flex-col w-full h-full max-h-full">
    <ProductModalFormProvider>
      <ProductPage  />
    </ProductModalFormProvider>
  </div>

}
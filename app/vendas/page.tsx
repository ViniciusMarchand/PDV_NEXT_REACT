'use client'
import SalesPage from "@/components/vendas/SalesPage";
import { ProductModalFormSalesProvider } from "@/contexts/ProductModalSalesFormContext";

export default function Vendas() {
  return <ProductModalFormSalesProvider>
    <div className="flex w-full h-full">
      <SalesPage />
    </div>
  </ProductModalFormSalesProvider>
}
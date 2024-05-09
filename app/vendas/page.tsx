'use client'
import SalesPage from "@/components/vendas/SalesPage";
import { ProductModalFormSalesProvider } from "@/contexts/ProductModalSalesFormContext";

export default function Vendas() {
  return <div className="flex w-full h-full">
    <ProductModalFormSalesProvider>
      <SalesPage />
    </ProductModalFormSalesProvider>
  </div>
}
'use client'
import salesApi from "@/api/salesApi";
import SalesHistoryTable from "@/components/historico-vendas/SalesHistoryTable";
import { Pagination, Sale } from "@/global/Types";
import { useEffect, useState } from "react";
import usePagination from "@/hooks/usePagination";
import { useRouter } from "next/navigation";

export default function HistoricoVendas() {
    const [pagination, setPagination] = useState<Pagination>();
    const [salesHistory, setSalesHistory] = useState<Sale[]>([]);
    const { page } = usePagination();
    const router = useRouter();

    
    useEffect(() => {
        if(page < 0) {
            router.push('/historico-vendas?page=1');
            return
        }
        salesApi.getSalesHistory(page,25).then(res => {
            setSalesHistory(res.data.content);
            setPagination(res.data);
        });
    },[page, router]);

    return <div className="flex flex-col w-full h-full max-h-full">
        {/* <ContentHeader></ContentHeader> */}
        <SalesHistoryTable salesHistory={salesHistory} pagination={pagination}/>
    </div> 
}
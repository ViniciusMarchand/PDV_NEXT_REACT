'use client'
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function usePagination() {
    const searchParams = useSearchParams();

    const [page, setPage] = useState<number>(-1);

    useEffect(() => {
        const newPage = searchParams?.get('page') || '';
        
        setPage(Number(newPage) - 1);
    }, [searchParams]);

    const value = {page};
    return value;
}
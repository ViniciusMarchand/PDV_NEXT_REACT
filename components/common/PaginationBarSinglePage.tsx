'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function PaginationBarSinglePage(props: { pagination: any, changePage: Function }) {
    const pagination = props.pagination;
    const changePage = props.changePage;
    const { number, totalPages } = pagination.page;
    const [pages, setPages] = useState<number[]>([]);


    useEffect(() => {
        let midPages = [];
        for(let i = -2; i < 3; i++) {
            const num = number + i;
            if(
                num > 0 && 
                num < totalPages &&
                num !== 0 &&
                num !== totalPages - 1
            ) {
                midPages.push(num);
            }
        }
        setPages([0, midPages, totalPages - 1].flat());
    },[number, totalPages]);

    const isNotFirstPage = number >= 1;
    const isNotLastPage = number < totalPages - 1;

    return (
        totalPages > 1 &&
        <nav className="mt-1">
            <ul className="flex items-center -space-x-px h-paginationbar text-sm">
                <li>
                    <p className={"flex items-center justify-center px-3 h-paginationbar ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer " + (!isNotFirstPage && "  bg-gray-100")} onClick={() => isNotFirstPage && changePage(number - 1)}>
                        <span className="sr-only">Previous</span>
                        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                        </svg>
                    </p>
                </li>
                {
                    pages.map((page) => (
                        <li key={page} onClick={() => changePage(page)}>
                            <p className={"flex items-center justify-center px-3 h-paginationbar leading-tight text-gray-500  border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer " + (number === (page) && "bg-gray-300")}>{page + 1}</p>
                        </li>
                    ))
                }
                <li>
                    <p className={"flex items-center justify-center px-3 h-paginationbar leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer " + (!isNotLastPage && "  bg-gray-100")} onClick={() => isNotLastPage && changePage(number + 1)}>
                        <span className="sr-only">Next</span>
                        <svg className="w-2.5 h-2.5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                        </svg>
                    </p>
                </li>
            </ul>
        </nav>
    )
}
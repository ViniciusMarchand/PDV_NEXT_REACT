'use client'
import { SideBarData } from "@/constants/Sidebar";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    function isCurrentPage(path:string) {
        if(pathname === path) {
            return "text-[#fdfdfd] bg-terciaria";
        } 
        return ""
    }

    return <>
        <div className="left-0 min-h-full bg-secundaria w-sidebar sticky shadow-md py-0 z-10">
            <div className="h-header flex flex-col justify-center items-center mb-3">
                <h1 className="font-bold text-[18px]">Ferragem</h1>
                <h2 className="font-bold">Avila</h2>
            </div>
            {
                SideBarData.map((elemento, i) => (
                    <Link key={i} href={elemento.path}>
                        <div className="flex cursor-pointer hover:rounded-md hover:text-terciaria transition">
                            <div className={"flex  items-center p-3 w-full " + isCurrentPage(elemento.path)}>
                                {elemento.icon}
                                <p className="ml-2">{elemento.title}</p>
                            </div>
                        </div>
                        <div className=""></div>
                    </Link>
                ))
            }
        </div>
    </>
}
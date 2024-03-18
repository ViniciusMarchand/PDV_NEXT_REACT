'use client'
import { SideBarData } from "@/constants/Sidebar";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();

    function isCurrentPage(path:string) {
        if(pathname === path) {
            return "text-terciaria";
        } 
        return ""
    }

    return <>
        <div className="left-0 h-screen bg-secundaria w-sidebar fixed shadow-md py-3 px-2">
            {
                SideBarData.map(elemento => (
                    <Link href={elemento.path}>
                        <div className="flex cursor-pointer  hover:rounded-md hover:text-terciaria transition">
                            <div className={"flex justify-center items-center p-3 " + isCurrentPage(elemento.path)}>
                                {elemento.icon}
                                <p className="ml-2">{elemento.title}</p>
                            </div>
                        </div>
                        <div className="border my-1"></div>
                    </Link>
                ))
            }
        </div>
    </>
}
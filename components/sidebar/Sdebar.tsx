'use client'
import { SideBarData } from "@/constants/Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/imgs/logo-header.png"
import Image from "next/image";

export default function Sidebar() {
    const pathname = usePathname();

    function isCurrentPage(path:string) {
        if(pathname === path) {
            return "text-textoContraste bg-terciaria";
        } 
        return ""
    }

    return <>
        <div className="left-0 min-h-full bg-secundaria w-sidebar fixed shadow-md py-0 px-8 z-10">
            <div className="min-h-header flex flex-col justify-center items-center my-5">
                {/* <h1 className="font-bold text-[18px]">Ferragem</h1>
                <h2 className="font-bold">Avila</h2> */}
                <Image src={Logo} alt="logo" height={150}/>
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
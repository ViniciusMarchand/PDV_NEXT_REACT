'use client'
import { SideBarData } from "@/constants/Sidebar";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/public/imgs/logo.png"
import Image from "next/image";
import { useEffect, useState } from "react";
import { getUserInfo } from "@/lib/utils";
import { UserToken } from "@/global/Types";

export default function Sidebar() {
    const pathname = usePathname();
    const [userInfo, setUserInfo] = useState<UserToken>();

    useEffect(() => {
        const user = getUserInfo();
        setUserInfo(user);
    },[]);


    function isCurrentPage(path:string) {
        if(pathname && path.includes(pathname)) {
            return "text-textoContraste bg-terciaria";
        } 
    }
    
    return <>
        <div className="left-0 min-h-full bg-secundaria w-sidebar fixed shadow-md py-0 z-10">
            <div className="min-h-header flex flex-col justify-center items-center my-5">
                <Image priority={true} src={Logo} alt="logo" height={150} className="h-auto"/>
            </div>
            {
                SideBarData.map((elemento, i) => (
                    elemento.access && elemento.access !== userInfo?.scope ? null :
                    <Link key={i} href={elemento.path}>
                        <div className="flex cursor-pointer hover:rounded-md hover:text-terciaria transition">
                            <div className={"flex  items-center p-3 w-full " + isCurrentPage(elemento.path)}>
                                {elemento.icon}
                                <p className="ml-2">{elemento.title}</p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </>
}
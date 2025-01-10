import { FaRegUserCircle } from "react-icons/fa";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { useEffect, useState } from "react";
import { UserToken } from "@/global/Types";
import { clearCookies, getUserInfo } from "@/lib/utils";
import { useRouter } from "next/navigation";

export default function UserInfo() {

    const [userInfo, setUserInfo] = useState<UserToken>();
    const router = useRouter();

    useEffect(() => {
        const user = getUserInfo();
        setUserInfo(user);
    },[]);


    const logout = () => {
        clearCookies();
        router.push('/');
    }


    return <Popover>
        <PopoverTrigger>
            <div className="cursor-pointer hover:text-terciaria transition">
                <FaRegUserCircle size={32}/>
            </div>
        </PopoverTrigger>
        <PopoverContent className="z-[1000]">
            <div className="flex flex-col items-center z-[1000]">
                <p className="font-bold">USUÁRIO:</p>
                <p>{userInfo?.nome}</p>
                <div className="border-t w-full my-2"></div>
                <p 
                    className="transition hover:bg-red-500 hover:text-textoContraste font-bold w-full text-center cursor-pointer h-[37px] flex items-center justify-center"
                    onClick={logout}
                >
                    SAIR
                </p>
            </div>
        </PopoverContent>
    </Popover>  
}
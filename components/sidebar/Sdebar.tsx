import { SideBarData } from "@/constants/Sidebar";

export default function Sidebar() {
    return <>
        <div className="left-0 h-screen bg-secundaria w-[250px] fixed shadow-md py-3 px-2">
            {
                SideBarData.map(elemento => (
                    <>
                        <div className="flex cursor-pointer  hover:rounded-md hover:text-terciaria transition">
                            <div className="flex justify-center items-center p-3">
                                {elemento.icon}
                                <p className="ml-2">Produtos</p>
                            </div>
                        </div>
                        <div className="border"></div>
                    </>
                ))
            }
        </div>
    </>
}
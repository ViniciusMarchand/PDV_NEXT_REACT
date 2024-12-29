import { FaBoxes, FaChartBar } from "react-icons/fa";
import { FaCashRegister } from "react-icons/fa";
import { TiUserAdd } from "react-icons/ti";

export const SideBarData = [
    {
        title: "Vendas",
        path: "/vendas",
        icon: <FaCashRegister size={30}/>
    },
    {
        title: "Produtos",
        path: "/produtos?page=1",
        icon: <FaBoxes size={30}/>
    },
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: <FaChartBar size={30} />,
        access: 'ADMIN'
    },
    {
        title: "Usuários",
        path: "/usuarios",
        icon: <TiUserAdd size={30} />,
        access: 'ADMIN'
    }
]
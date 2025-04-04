import { MdPointOfSale } from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import { FaHistory } from "react-icons/fa";
import { FaBoxesStacked } from "react-icons/fa6";
import { FaChartColumn } from "react-icons/fa6";

export const SideBarData = [
    {
        title: "Vendas",
        path: "/vendas",
        icon: <MdPointOfSale size={30}/>
    },
    {
        title: "Produtos",
        path: "/produtos?page=1",
        icon: <FaBoxesStacked size={30}/>
    },
    {
        title: "Indicadores",
        path: "/dashboard",
        icon: <FaChartColumn size={30} />,
        access: 'ADMIN'
    },
    {
        title: "Usuários",
        path: "/usuarios",
        icon: <TiUserAdd size={30} />,
        access: 'ADMIN'
    },
    {
        title: "Histórico de Vendas",
        path: "/historico-vendas",
        icon: <FaHistory size={30} />,
    }
]
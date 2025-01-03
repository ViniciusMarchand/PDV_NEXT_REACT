import BestSellers from "@/components/dashboard/BestSellers";
import LowStock from "@/components/dashboard/LowStock";
import { MonthlySalesChart } from "@/components/dashboard/MonthlySalesChart copy";
import { WeeklySalesChart } from "@/components/dashboard/WeeklySalesChart";

export default function Page() {

    return( 
        <div className="overflow-auto max-h-full">
            <div className="w-full p-2 gap-5 grow-1 flex">
                <BestSellers />
            </div>
            <div className="w-full p-2 gap-5 grow-1 flex">
                <WeeklySalesChart />
                <LowStock />
            </div>
            <div className="w-full p-2 gap-5 grow-1 flex">
                <MonthlySalesChart />
            </div>
        </div>
    )
}
import { WeeklySalesChart } from "@/components/dashboard/WeeklySalesChart";

export default function Page() {
    return( 
            <div className="w-full p-2 gap-5 grow-1 flex">
                <WeeklySalesChart />
                {/* <WeeklySalesChart /> */}
            </div>
    )
}
"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import CardLayout from "../common/CardLayout"
import { useEffect, useState } from "react"
import { WeeklySalesData } from "@/global/Types"
import dashboardApi from "@/api/dashboardApi"
import Spinner from "../common/Spinner"

const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
]

const chartConfig = {
    vendaTotal: {
        label: "Valor Total",
        color: "#2563eb",
    },
    lucro: {
        label: "Lucro",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export function WeeklySalesChart() {

    const [data, setData] = useState<WeeklySalesData[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await dashboardApi.weeklyChart();
                setData(res.data.vendasDiarias);
            } catch (error) {

            }
        })();
    }, []);

    return (
        <CardLayout>
            <div className="h-[300px] w-full flex flex-col justify-center items-center p-5">
                {
                    data.length > 0 ? (
                        <>
                            <h2>VENDAS SEMANAIS</h2>
                            <ChartContainer config={chartConfig} className="h-[250px] w-full">
                                <BarChart accessibilityLayer data={data}>
                                    <CartesianGrid vertical={false} />
                                    <XAxis
                                        dataKey="data"
                                        tickLine={false}
                                        tickMargin={10}
                                        axisLine={false}
                                        tickFormatter={(value) => {
                                            const date = new Date(value); // Converte o valor para um objeto Date
                                            return date.toLocaleDateString('pt-BR', {
                                                day: '2-digit',
                                                month: '2-digit',
                                                year: '2-digit',
                                            });
                                        }}
                                    />
                                    <ChartTooltip content={<ChartTooltipContent />} />
                                    <Bar dataKey="totalVendas" fill="var(--color-valorTotal)" radius={4} />
                                    <Bar dataKey="totalLucro" fill="var(--color-lucro)" radius={4} />
                                </BarChart>
                            </ChartContainer>
                        </>
                    ) : <Spinner size={30}/>
                }
            </div>
        </CardLayout>
    )
}

"use client"

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import CardLayout from "../common/CardLayout"
import { useEffect, useState } from "react"
import { DailySales } from "@/global/Types"
import dashboardApi from "@/api/dashboardApi"
import Spinner from "../common/Spinner"

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

export function MonthlySalesChart() {

    const [data, setData] = useState<DailySales[]>([]);

    useEffect(() => {
        (async () => {
            try {
                const res = await dashboardApi.monthlyChart();
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
                            <h2 className="font-bold">VENDAS MENSAIS</h2>
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
                                    <Bar dataKey="totalVendas" name={"Vendas totais"} fill="var(--color-valorTotal)" radius={4} />
                                    <Bar dataKey="totalLucro" name={"Lucros totais"} fill="var(--color-lucro)" radius={4} />
                                </BarChart>
                            </ChartContainer>
                        </>
                    ) : <Spinner />
                }
            </div>
        </CardLayout>
    )
}

"use client"

import React, { useCallback, useEffect } from "react"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { Calendar } from "../ui/calendar"
import { FaSearch } from "react-icons/fa"
import { ptBR } from "date-fns/locale"

interface DatePickerProps {
    onSearchDate: (date: string) => Promise<void>;
}

export function DatePicker({ onSearchDate }: DatePickerProps) {
    const [dateTemplate, setDateTemplate] = React.useState<Date>(new Date())
    const [date, setDate] = React.useState<string>(format(new Date(), "yyyy-MM-dd"))


    async function handleDate(date:Date) {
        setDate(format(dateTemplate, "yyyy-MM-dd"))
    }

    useEffect(() => {
        onSearchDate(date)
    }, [date])	

    return (
        <div className="flex gap-2">
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        variant={"outline"}
                        className={cn(
                            "w-[280px] justify-start text-left font-normal",
                            !dateTemplate && "text-muted-foreground"
                        )}
                    >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {dateTemplate ? format(dateTemplate, "dd/MM/yyyy") : <span>Selecione uma data</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                    <Calendar
                        mode="single"
                        locale={ptBR}
                        selected={dateTemplate}
                        onSelect={(day) => day && setDateTemplate(day)}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
            <Button className="bg-terciaria hover:bg-terciaria2" onClick={() => handleDate(dateTemplate)}>
                <FaSearch className="text-white" size={18} />
            </Button>
        </div>
    )
}

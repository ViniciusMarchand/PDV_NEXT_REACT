import { ReactNode } from "react";
import CardLayout from "./CardLayout";

interface ContentHeaderProps {
    children: ReactNode;
}

export default function ContentHeader({ children }: ContentHeaderProps) {
    return (
        <div className="w-full h-[80px] mb-3">
            <CardLayout>
                <div className="h-full w-full flex justify-start items-center px-3 gap-3">
                    {children}
                </div>
            </CardLayout>
        </div>
    )
}
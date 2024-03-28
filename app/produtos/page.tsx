import CardLayout from "@/components/common/CardLayout";
import SideOptions from "@/components/common/SideOptions";

export default function produtos() {
    return <div className="flex w-full h-full">


        <div className="w-2/3 mr-2 h-full">
            <CardLayout>
                <div className="h-[200px]"></div>
            </CardLayout>
        </div>

        <div className="w-1/3">
            <CardLayout>
                <div className="h-full"></div>
            </CardLayout>
        </div>
    </div>
        
}
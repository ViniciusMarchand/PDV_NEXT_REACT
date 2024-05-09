import CardLayout from "../common/CardLayout";
import ModalButton from "../common/ModalButton";

export default function SalesPage() {
    return <>
        <div className="flex flex-col w-full h-full">
            <div className="w-full h-[80px] mb-3">
                <CardLayout>
                    <div className="h-full w-full flex justify-start items-center px-3  ">
                        <div className="w-[200px] h-[35px]">
                            <ModalButton value="Adicionar Item" />
                        </div>
                    </div>
                </CardLayout>
            </div>
            <div className="h-[500px] grow">
                <CardLayout>
                    <div>

                    </div>
                </CardLayout>
            </div>
        </div>
        <div className="h-full ml-3">
                <CardLayout>
                    <div className="w-[400px]">

                    </div>
                </CardLayout>
            </div>

    </>
}
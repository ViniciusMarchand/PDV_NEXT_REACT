'use client'
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { FaFileImport } from "react-icons/fa";
import ImportOptions from "./ImportOptions";
import { useState } from "react";

export default function ImportPopOver() {
    
    const [isClosed, setIsClosed] = useState(true);

    const closePopover = () => {
        setIsClosed(true);
    }

    return <Popover open={!isClosed}>
            <PopoverTrigger onClick={() => setIsClosed(!isClosed)}>            
                <div className="bg-terciaria hover:bg-terciaria2 transition w-[35px] h-[35px] rounded-sm cursor-pointer">
                    {/* <Input id="files" type="file" className="hidden" onChange={(e) => sendFile(e)}/> */}
                    <label htmlFor="files" className="w-[35px] h-[35px] flex justify-center items-center cursor-pointer shadow-md" title="importar CSV">
                        <FaFileImport  color="fdfdfd" size={20}/>
                    </label>
                </div>
            </PopoverTrigger>
            <PopoverContent className="min-w-[450px] flex justify-center">
                <ImportOptions closePopover={closePopover}/>
            </PopoverContent>
        </Popover>
}

import { UseFormRegister } from "react-hook-form";

import { FormValues } from "@/global/Types";
import { Input } from "../ui/input";



interface FormProps {
    register: UseFormRegister<any>;
    formValues: FormValues[]
}

const Form: React.FC<FormProps> = ({ register, formValues }) => {
    return (
        <div className="flex flex-wrap gap-3 justify-center w-full">
            {
                formValues.map(({label, value, placeholder, type}) => (
                    <div key={value}>
                        <label className="text-[18px]" htmlFor={value}>{label}</label>
                        <Input 
                            className="w-[200px] h-[45px] text-[18px] border mb-3 p-2 bg-secundaria"   
                            {...register(value)}
                            placeholder={placeholder}
                            type={type}
                            required
                        />
                    </div>
                ))
            }
        </div>
        

    );

};



export default Form;
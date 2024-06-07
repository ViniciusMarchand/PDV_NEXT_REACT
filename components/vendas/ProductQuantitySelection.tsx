'use cliente'
import { ProductInputs } from "@/global/Types";
import { useEffect, useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

export default function ProductQuantitySelection(props:{product:ProductInputs, removeProduct:Function, changeQuantity: Function}) {
    const {product, removeProduct, changeQuantity} = props;
    const [quantity, setQuantity] = useState("1");

    useEffect(() => {
        let number;
        try {
            number = parseFloat(quantity);
        } catch (error) {
            number = 1;
        }
        changeQuantity(product.id, number);
    },[quantity, changeQuantity, product]);

    return <div className="flex w-full justify-between mb-2 ">
        <p className="flex items-center">{product.descricao}</p>
        <div className="flex justify-center items-center">
         <input required value={quantity} type="number" className="text-[15px] border w-[30px] h-[30px] focus:outline-none rounded-md p-1 bg-secundaria mr-1" onChange={(e) => setQuantity(e.target.value)} /> <FaRegTrashCan  size={15} className="hover:text-terciaria hover:cursor-pointer text-center" onClick={() => removeProduct(product.id)}/>
        </div>
    </div>
}
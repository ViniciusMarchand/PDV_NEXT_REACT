import { Item } from "@/global/Types";
import { useState } from "react";

export default function EditableQuantity(props: { item: Item, setNewQuantity: Function }) {
    const { item, setNewQuantity } = props;
    const [quantity, setQuantity] = useState<string | number>(item.quantity);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuantity(value);
        setNewQuantity(value);
    };

    return (
        <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-12 text-center hover:text-[#333] border rounded-sm outline-gray-500"
        />
    );
}
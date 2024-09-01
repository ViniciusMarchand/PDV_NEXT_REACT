import { ProductModalSalesFormContext } from "@/contexts/ProductModalSalesFormContext";
import { Item } from "@/global/Types";
import { useContext, useState } from "react";

export default function EditableQuantity({ item }: { item: Item }) {
    const { updateQuantity } = useContext(ProductModalSalesFormContext);
    const [quantity, setQuantity] = useState(item.quantity);

    const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = parseInt(e.target.value);
        if (value > 0) {
            setQuantity(value);
            updateQuantity(item.product.id, value);
        }
    };

    return (
        <input
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-12 text-center hover:text-[#333] border rounded-sm"
        />
    );
}
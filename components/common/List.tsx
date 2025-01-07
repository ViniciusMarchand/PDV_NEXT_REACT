import { createElement } from "react";

interface ListProps {
    items: any[];
    itemProp: string;
    compoenent: React.ElementType;
}

export default function List({ items, itemProp, compoenent }: ListProps) {
    return items.map(item => (
        createElement(compoenent, { [itemProp]: item, key: item.id })
    ))
}
export interface Item {
    id: number;
    colour: string;
    name: string,
    price: number,
    img: string,
}

export interface CartItem extends Item {
    qty: number
}

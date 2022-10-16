import {CartItem} from "../types/item";

export const filterItems = (items: CartItem[], filterValue: string) => {
    if (!filterValue) return items;
    return items.filter((item) => item.colour === filterValue)
}
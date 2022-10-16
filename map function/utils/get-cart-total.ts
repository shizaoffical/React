import {CartItem} from "../types/item";
import Decimal from "decimal.js";
import {convertDecimalToNumber} from "./convert-decimal-to-number";

export const getCartTotal = (cartItems: CartItem[]) => {
    const cartTotalDecimal = cartItems.reduce(
        (accumulator, cartItem) => {
            const itemTotal = new Decimal(cartItem.price).times(cartItem.qty);
            return accumulator.add(itemTotal);
        },
        new Decimal(0)
    );
    return convertDecimalToNumber(cartTotalDecimal);
}
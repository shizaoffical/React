import Decimal from "decimal.js";

const FRACTION_DIGIT = 2;
export const convertDecimalToNumber = (decimalJsValue: Decimal, fractionDigit = FRACTION_DIGIT) =>
    decimalJsValue.toFixed(fractionDigit);

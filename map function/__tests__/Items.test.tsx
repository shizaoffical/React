import React from "react"
import {screen} from "@testing-library/react"
import {render} from "../test-utils";
import Items from "../components/Items";
import {PRODUCTS} from "../data/products";

describe('Products', () => {
    it('should render items correctly', async () => {
        render(<Items items={PRODUCTS}/>)
        expect(screen.getByTestId('products-list').childNodes).toHaveLength(PRODUCTS.length)
    })
})
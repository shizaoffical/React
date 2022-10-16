import React from "react"
import {screen} from "@testing-library/react"
import {render} from "./test-utils"
import App from "./App"

describe('ProductsList', () => {
    it('should render the page', async () => {
        render(<App/>)
        expect(screen.getByTestId("loading-products")).toBeInTheDocument();
    })
})
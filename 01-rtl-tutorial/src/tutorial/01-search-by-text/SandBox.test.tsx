import { render, screen } from "@testing-library/react"
import Sandbox from "../../tutorial/01-search-by-text/Sandbox"

describe("sandbox component should render correctly", ()=> {
    it("should render title correctly", ()=> {
        render(<Sandbox/>)

        const title = screen.getByText("React testing library")
        expect(title).toBeInTheDocument()
    })

    it("should render the li element correctly", ()=> {
        render(<Sandbox/>)

        const li = screen.getByRole("list")
        expect(li).toBeInTheDocument()
    })

    it("should check if the error message is not in the DOM", ()=> {
        render(<Sandbox/>)

        //we can use query by text when the element is not render yet
        const errorMessage = screen.queryByText("show error")
        expect(errorMessage).not.toBeInTheDocument()
    })

    it("should check if the ul have an amount of items", () => {
        render(<Sandbox/>)

        const items = screen.getAllByRole("listitem")
        expect(items).toHaveLength(4)
    })
})
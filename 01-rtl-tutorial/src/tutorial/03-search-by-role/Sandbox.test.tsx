import { logRoles, render, screen } from "@testing-library/react";
import Sandbox from "./Sandbox";

describe("03-search-by-role", ()=> {
    test("renders nav and navigation links", ()=> {
     const {container} = render(<Sandbox/>)
     logRoles(container)
    expect(screen.getByRole('navigation')).toBeInTheDocument()
    expect(screen.getByRole("link", {name: "Home"}))
    expect(screen.getByRole("link", {name: "About"}))
    })

    test("renders headings with correct hierarchy", ()=> {
        render(<Sandbox/>)

        expect(screen.getByRole("heading", {name: "Main Heading", level: 1}))
        expect(screen.getByRole("heading", {name: "Subheading", level: 2}))
    })

    test("renders the image correctly", ()=> {
        render(<Sandbox/>)

        expect(screen.getByRole("img", {name: "example-imgs"})).toBeInTheDocument()
    })

    test("renders the buttons correctly", ()=> {
        render(<Sandbox/>)

        expect(screen.getByRole("button", {name: "Click me"})).toBeInTheDocument()
        expect(screen.getByRole("button", {name: "Cancel"})).toBeInTheDocument()
    })

    test("renders the aysnc error button", ()=> {
        render(<Sandbox/>)

        expect(screen.queryByRole("button", {name: "Error"})).not.toBeInTheDocument()
    })

    test("renders the aysnc ok button", ()=> {
        render(<Sandbox/>)

        expect(screen.queryByRole("button", {name: "Confirm Button"})).not.toBeInTheDocument()
    })
})
import { fireEvent, render, screen } from "@testing-library/react"
import Sandbox from "../../tutorial/04-user-interactions/Sandbox"
import userEvent from "@testing-library/user-event"
import { useState } from "react"

describe("should render the user interactions when click on buttons", ()=> {
    // it("should increase count work by select increase button", ()=> {
    //     render(<Sandbox/>)

    //     const increaseBtn = screen.getByText("increase")
    //     expect(increaseBtn).toBeInTheDocument()
    // })

    // it("should decrease count work by select decrease button", ()=> {
    //     render(<Sandbox/>)

    //     const decreaseBtn = screen.getByRole("button", {name: "decrease"})
    //     expect(decreaseBtn).toBeInTheDocument()
    // })

    it("shoudd verifies if the count is initiality 0", ()=> {
        render(<Sandbox/>)

        const countZero = screen.getByText((/Count: 0/i))
        expect(countZero).toBeInTheDocument()
    })

    it("should selects decrease button", () => {
        render(<Sandbox/>)

        const decreaseBtn = screen.getByRole("button", {name: "decrease"}) 

        fireEvent.click(decreaseBtn)
        expect(screen.getByText(/Count: -1/i))

    })

    it("shoudd selects increase button", ()=> {
        render(<Sandbox/>)

        const increaseBtn = screen.getByRole("button", {name: "increase"}) 

        fireEvent.click(increaseBtn)
        expect(screen.getByText(/Count: 1/)).toBeInTheDocument()
    })

    it("should toogle between like and unline button", async ()=> {
        render(<Sandbox/>)

        const user = userEvent.setup()

        const unlikeButton = screen.getByRole("button", {name: "unlike button"})
        expect(unlikeButton).toBeInTheDocument()

        //depois que clica no deslike, ele vira like (troca o estado)
        await user.click(unlikeButton)

        const likeButton = screen.getByRole("button", {name: "like button"})
        expect(likeButton).toBeInTheDocument()
    })

    
})
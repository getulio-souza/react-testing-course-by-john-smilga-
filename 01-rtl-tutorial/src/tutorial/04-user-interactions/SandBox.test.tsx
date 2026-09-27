import { fireEvent, render, screen } from "@testing-library/react"
import Sandbox from "../../tutorial/04-user-interactions/Sandbox"
import userEvent from "@testing-library/user-event"

describe("should render the user interactions when click on buttons", ()=> {

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
        fireEvent.click(increaseBtn)
        expect(screen.getByText(/Count: 2/)).toBeInTheDocument()
    })

    it("should increase and decrease count with user event", ()=> {
        render(<Sandbox/>)
        const user = userEvent.setup()

        const decreaseBtn = screen.getByRole("button", {name: 'decrease'})
        const increaseBtn = screen.getByRole("button", {name: 'increase'})

        expect(screen.getByText(/Count: 0/i)).toBeInTheDocument()

        user.click(increaseBtn);
        expect(screen.getByText("/Count: 1/i"))

        user.click(decreaseBtn);
        expect(screen.getByText("/Count: -1/i"))



    })
})
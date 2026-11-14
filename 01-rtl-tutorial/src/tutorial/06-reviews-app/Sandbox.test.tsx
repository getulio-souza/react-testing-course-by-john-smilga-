import { render, screen } from "@testing-library/react";
import Sandbox from "../06-reviews-app/Sandbox"
import { getFormElements } from "./Form.test";
import userEvent from "@testing-library/user-event";

describe("Reviews app", ()=> {
    test("renders review app title", ()=> {
        render(<Sandbox/>)

        const title = screen.getByRole("heading", {name: /reviews app/i})
        expect(title).toBeInTheDocument()
    })

    test("add a new review when form is submitted", async ()=> {
        const user = userEvent.setup()

        render(<Sandbox/>)

        const {emailInput, ratingSelect, textArea, submitButton } = getFormElements()

        screen.debug()

        await user.type(emailInput, 'user@example.com')
        await user.selectOptions(ratingSelect, '5')
        await user.type(textArea, 'this is a great product. I am happy to have it sooner!')
        await user.click(submitButton)

        // assertions
        expect(emailInput).toBeInTheDocument()
        expect(textArea).toBeInTheDocument()
    })

    test("alternative - add a new review when form is submitted", async ()=> {
        const user = userEvent.setup()
        render(<Sandbox/>)

        const {emailInput, ratingSelect, textArea, submitButton} = getFormElements()

        await user.type(emailInput, 'getulio@example.com')
        await user.selectOptions(ratingSelect, '5')
        await user.type(textArea, 'this is a great product. I liked it very much!')

        await user.click(submitButton)

        expect(screen.getAllByRole('article')).toHaveLength(1)
    })
})
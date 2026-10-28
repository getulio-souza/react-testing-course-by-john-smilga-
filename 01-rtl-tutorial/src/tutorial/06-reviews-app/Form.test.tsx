import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";

export const getFormElements = () => {
    const emailInput = screen.getByRole("textbox", {name: /email/i});
    const ratingSelect = screen.getByRole("combobox", {name: /rating/i});
    const textArea = screen.getByRole("textbox", {name: ""});
    const submitButton = screen.getByRole("button", {name: /submit/i})

    return{
        emailInput, 
        ratingSelect,
        textArea,
        submitButton
    }
}


describe("Review form", ()=> {

    const mockOnSubmit = vi.fn()

    beforeEach(()=> {
        mockOnSubmit.mockClear()
    })

    test("renders form correctly", ()=> {

        render(<Form onSubmit={mockOnSubmit}/>)

        const {emailInput, ratingSelect, textArea, submitButton} = getFormElements()

        expect(emailInput).toHaveValue("")
        expect(ratingSelect).toHaveValue("")
        expect(textArea).toHaveValue("")
        expect(submitButton).toHaveValue("")
    })

    test("show error message when review is too short", async()=> {
        const user = userEvent.setup()

        const {emailInput, ratingSelect, textArea, submitButton} = getFormElements()

        render(<Form onSubmit={mockOnSubmit}/>)

        await user.type(emailInput, 'test@example.com')
        await user.selectOptions(ratingSelect, '5')
        await user.type(textArea, 'short')
        
        await user.click(submitButton)

    })
})
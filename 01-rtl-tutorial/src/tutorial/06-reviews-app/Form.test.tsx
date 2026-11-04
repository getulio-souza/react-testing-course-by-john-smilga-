import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form";


export const getFormElements = () => {
        
    const emailInput = screen.getByRole("textbox", {name: "email"} );
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

    screen.debug()

    const mockOnSubmit = vi.fn()

    beforeEach(()=> {
        render(<Form onSubmit={mockOnSubmit}/>)
        mockOnSubmit.mockClear()
    })
    
    test("renders form correctly", ()=> {
        
        const {emailInput, ratingSelect, textArea, submitButton} = getFormElements()

        expect(emailInput).toHaveValue("")
        expect(ratingSelect).toHaveValue("")
        expect(textArea).toHaveValue("")
        expect(submitButton).toHaveValue("")
    })

    test("show error message when review is too short", async()=> {

        const user = userEvent.setup()

        const {emailInput, ratingSelect, textArea, submitButton} = getFormElements()

        await user.type(emailInput, 'test@example.com')
        await user.selectOptions(ratingSelect, '5')
        await user.type(textArea, 'short')
        
        await user.click(submitButton)

        expect(screen.getByText(/review must be at least 10 caracters long/i)).toBeInTheDocument()
        expect(mockOnSubmit).not.toHaveBeenCalled()

    })

    test("submits form with valid data", async ()=> {
        const user = userEvent.setup()

        const {emailInput, ratingSelect, textArea, submitButton} = getFormElements();

        await user.type(emailInput, "test@example.com");
        await user.selectOptions(ratingSelect, '5')
        await user.type(textArea, 'this is a valid review to the form')
        await user.click(submitButton)

        expect(mockOnSubmit).toHaveBeenCalledTimes(1)
    })
})
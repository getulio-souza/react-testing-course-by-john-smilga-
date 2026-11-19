import { render, screen } from "@testing-library/react";
import Form from "../components/Form";
import userEvent, {type UserEvent} from "@testing-library/user-event";

const getFormElements = () => {
    return{
        titleInput: screen.getByRole("textbox", {name: /title/i}),
        descriptionInput: screen.getByRole("textbox", {name: /description/i}),
        categorySelect: screen.getByRole('combobox', {name: /category/i}),
        submitButton: screen.getByRole("button", {name: /add task/i})
    }
}


describe("Form Component", ()=> {
    let user: UserEvent
    const mockOnSubmit = vi.fn()
    
    beforeEach(()=> {
        mockOnSubmit.mockClear()
        user = userEvent.setup()
        render(<Form onSubmit={mockOnSubmit}/>)
    })

    
    test("renders form fields initially empty", ()=> {
        screen.debug()
        const {titleInput, descriptionInput, categorySelect} = getFormElements()

        expect(titleInput).toHaveValue("")
        expect(descriptionInput).toHaveValue("")
        expect(categorySelect).toHaveValue("")
    })

    test("submit the form with entered values", async ()=> {
        screen.debug()
        const {titleInput, descriptionInput, categorySelect, submitButton} = getFormElements();

        await user.type(titleInput, "this is a title")
        await user.type(descriptionInput, "this is a description typed by me")
        await user.selectOptions(categorySelect, "urgent")

        await user.click(submitButton)

        expect(mockOnSubmit).toHaveBeenCalledWith({
            title: 'this is a title',
            description: 'this is a description typed by me',
            category: 'urgent'
        })
    })
})
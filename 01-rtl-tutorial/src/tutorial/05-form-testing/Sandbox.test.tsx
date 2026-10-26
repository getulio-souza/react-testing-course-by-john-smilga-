import { render, screen } from "@testing-library/react";
import Sandbox from "./Sandbox"
import userEvent from "@testing-library/user-event";

const getElements = () => {
    const elements = {
        emailInputElement: screen.getByLabelText("email"),
        passwordInputElement: screen.getByLabelText("Password"),
        confirmPasswordInputElement: screen.getByLabelText("Confirm Password"),
        submitButton: screen.getByRole("button", {name: "submit"})
    }
    return elements
}

describe("05-form-testing", ()=> {
    test("inputs should be initially empty", ()=> {
        render(<Sandbox/>)

        const {
            emailInputElement, 
            passwordInputElement, 
            confirmPasswordInputElement,

        } 
            = getElements()

        expect(emailInputElement).toHaveValue("")
        expect(passwordInputElement).toHaveValue("")
        expect(confirmPasswordInputElement).toHaveValue("")
    })

    test("should be able to type in the inputs", async ()=> {
        render(<Sandbox />)
        const user = userEvent.setup();


        // email
        const emailInputElement = screen.getByLabelText("email")
        const emailValue = "getulio@gmail.com"
        await user.type(emailInputElement, emailValue)
        expect(emailInputElement).toHaveValue(emailValue)

        // password
        const passwordInputElement = screen.getByLabelText("Password")
        const passwordValue = "123456"
        await user.type(passwordInputElement, passwordValue)
        expect(passwordInputElement).toHaveValue(passwordValue)

        // confirm password
        const confirmPasswordInputElement = screen.getByLabelText("Confirm Password")
        const confirmPasswordValue = '123456'
        await user.type(confirmPasswordInputElement, confirmPasswordValue)
        expect(confirmPasswordInputElement).toHaveValue(confirmPasswordValue)
    })

    test("should show email message error if email is invalid", async ()=> {
        render(<Sandbox/>)

        const user = userEvent.setup()

        const {emailInputElement, submitButton} = getElements();

        expect(screen.queryByText(/invalid email/i)).not.toBeInTheDocument()

        await user.type(emailInputElement, "invalid")
        await user.click(submitButton)

        expect(screen.getByText(/invalid email/i)).toBeInTheDocument()
    })
})
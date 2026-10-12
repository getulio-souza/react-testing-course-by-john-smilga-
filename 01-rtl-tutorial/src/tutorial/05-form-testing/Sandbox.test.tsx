import { render, screen, logRoles } from "@testing-library/react";
import Sandbox from "./Sandbox"
import userEvent from "@testing-library/user-event";

describe("05-form-testing", ()=> {
    test("inputs should be initially empty", ()=> {
        const {container} = render(<Sandbox/>)
        screen.debug()
        logRoles(container)

        const emailInputElement = screen.getByRole("textbox", {name: 'email'})
        expect(emailInputElement).toHaveValue("")

        const passwordInputElement = screen.getByLabelText("Password")
        expect(passwordInputElement).toHaveValue("")

        const confirmPasswordInputElement = screen.getByLabelText("Confirm Password")
        expect(confirmPasswordInputElement).toHaveValue("")
    })

    test("should be able to type in the input", async ()=> {
        const user = userEvent.setup();

        render(<Sandbox />)

        const emailInputElement = screen.getByRole("textbox", {name: "email"})
        const emailValue = 'getulio@gmail.com'
        await user.type(emailInputElement, emailValue)
        expect(emailInputElement).toHaveValue(emailValue)

    })
})
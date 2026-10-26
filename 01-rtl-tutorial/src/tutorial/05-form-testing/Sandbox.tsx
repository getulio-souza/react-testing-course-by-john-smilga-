import { useState } from "react";
import validator from "validator";

const labelStyles = 'block text-grey-700 font-medium mb-2'
const inputStyles = 'w-full px-3 py-2 border border-grey-300 rounded-md'
const buttonStyles = 'w-full bg-blue text-whiite py-2 px-4 rounded-md hover:bg-blue-600'

const Sandbox = () => {
  const defaultState = {
    email: "", 
    password: "",
    confirmPassword: ""
  }

  const [signupInput, setSignupInput] = useState(defaultState)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {id, value} = e.target
    setSignupInput({...signupInput, [id]: value})
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if(!validator.isEmail(signupInput.email)){
      return setError("invalid email")
    }

    if(!validator.isLength(signupInput.password)){
      return setError("Password must be at least 5 characters")
    }

    if(signupInput.password !== signupInput.confirmPassword){
      return setError('the password does not match')
    }

    setError("")

    setSignupInput(defaultState)

  }

  return(
    <div className="container mx-auto max-w-md m-10 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit} noValidate className="space-y-4">
        {/* email */}
        <div className="mb-3">
          <label htmlFor="email" className={labelStyles}>email</label>
          <input 
            type="email" 
            id="email"
            name="email" 
            value={signupInput.email} 
            onChange={handleChange} 
            className={inputStyles} 
          />
        </div>
        {/* password */}
        <div className="mb-3">
          <label htmlFor="password" className={labelStyles}>Password</label>
          <input type="password" id="password" value={signupInput.password} onChange={handleChange} className={inputStyles} />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className={labelStyles}>Confirm Password</label>
          <input type="confirmPassword" id="confirmPassword" value={signupInput.confirmPassword} onChange={handleChange} className={inputStyles} />
        </div>
        {error && (<p className="text-red-500 text-sm">`{error}</p>)}
        <button className={buttonStyles} type="submit">submit</button>
      </form>
    </div>
  )

};
export default Sandbox;

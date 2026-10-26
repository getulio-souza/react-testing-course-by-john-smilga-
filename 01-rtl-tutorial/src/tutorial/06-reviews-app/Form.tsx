import { useState, type FormEvent } from "react"
import { Review } from "./Sandbox"

type ReviewFormProps = {
    onSubmit: (review: Review) => void
}

const Form = ({ onSubmit }: ReviewFormProps) => {

    const [email, setEmail] = useState<string>('')
    const [rating, setRating] = useState<string>('')
    const [text, setText] = useState<string>('')
    const [textError, setTextError] = useState<string>('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    return (
        <form className="space-y-4 mb-8" action="" onSubmit={handleSubmit}>

            {/* email */}
            <div>
                <label htmlFor="email" className="block mb-2">
                    E-mail
                </label>
                <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    className="w-full border p-2 rounded"
                    required
                />
            </div>

            <div>
                <label htmlFor="rating">Rating</label>
                <select 
                    onChange={(e) => setRating(e.target.value)} 
                    id="rating" 
                    value={rating} 
                    className="w-full border p-2 rounded" 
                    required
                >
                    <option value="">Select option</option>
                    {[5,4,3,2,1].map((num)=> {
                        return <option key={num} value={num}>
                            {num} star{num !== 1 ? 's' : ''}
                            </option>
                    })}
                </select>
            </div>
        </form>
    )
}

export default Form
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
        e.preventDefault();

        if(text.length >= 10){
            const newReview = {email, rating, text}
            onSubmit(newReview)
            clearFields()

        } else{
            setTextError("Review must be at least 10 caracters long")
        }
    }

    const clearFields = () => {
        setEmail("")
        setRating("")
        setText("")
        setTextError("")
    }

    return (
        <form className="space-y-4 mb-8" action="" onSubmit={handleSubmit}>

            {/* email */}
            <div>
                <label htmlFor="email" className="block mb-2">
                    email
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

            {/* select */}
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

            {/* textarea  */}
            <textarea 
                name="text" 
                id="text" 
                onChange={(e)=> setText(e.target.value)} 
                className="w-full border p-2 rounded"
                required
                rows={4}
            />
            {textError && (<p className="text-red-500 text-sm mt-1 ">{textError}</p>)}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                submit
            </button>
        </form>
    )
}

export default Form
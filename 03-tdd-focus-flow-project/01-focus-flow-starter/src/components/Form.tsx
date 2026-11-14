import { useState } from "react"
import { type ItemWithoutId, type ItemCategory } from "../utils"

const Form = ({onSubmit}: {onSubmit: (item: ItemWithoutId)=> void}) => {

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>();
    const [category, setCategory] = useState<ItemCategory | ''>('')

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {

    }

    return(
        <div className="max-w-xl">
            <h2 className="text-xl font-semibold mb-2">
                Add New Task
            </h2>

            <form onSubmit={handleSubmitForm} className="space-y-4">
                <div>
                    <label htmlFor="title" className="text-sm font-medium leading-none block mb-2"></label>
                    <input type="text" id="title" value={title} onChange={(e)=> setTitle(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default Form
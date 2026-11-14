import { useState } from "react"
import { type ItemWithoutId, type ItemCategory } from "../utils"

const Form = ({onSubmit}: {onSubmit: (item: ItemWithoutId)=> void}) => {

    const [title, setTitle] = useState<string>('')
    const [description, setDescription] = useState<string>();
    const [category, setCategory] = useState<ItemCategory | ''>('')

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
        
    }

    return(
        <div>Form</div>
    )
}

export default Form
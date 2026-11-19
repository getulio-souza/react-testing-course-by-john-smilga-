import { useState } from "react"
import { type ItemWithoutId, type ItemCategory } from "../utils"

const Form = ({ onSubmit }: { onSubmit: (item: ItemWithoutId) => void }) => {

  const [title, setTitle] = useState<string>('')
  const [description, setDescription] = useState<string>('');
  const [category, setCategory] = useState<ItemCategory | '' >('')

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {

    e.preventDefault()

    if(!title || !description || !category ) return

    onSubmit({ title, description, category })

    setTitle("")
    setDescription("")
    setCategory("")
  }

  return (
    <div className="w-full max-w-xl mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-lg border border-gray-100">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">
      Add New Task
    </h2>

    <form onSubmit={handleSubmitForm} className="space-y-5">

      <div>
        <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
          Title
        </label>
        <input
          name="title"
          type="text"
          id="title"
          placeholder="Enter task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 outline-none transition focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
          Description
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="Describe your task..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-800 outline-none transition resize-y min-h-28 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
          Category
        </label>
        <select
          name="category"
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value as ItemCategory)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white text-gray-800 outline-none transition cursor-pointer focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">Select a category</option>
          <option value="work">Work</option>
          <option value="personal">Personal</option>
          <option value="important">Important</option>
          <option value="urgent">Urgent</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full py-3 px-4 bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98] text-white font-semibold rounded-lg transition duration-200 shadow-sm"
      >
        Add Task
      </button>

    </form>
  </div>
  )
}

export default Form
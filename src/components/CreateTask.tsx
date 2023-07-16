import React, { useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../app/taskSlice'

export default function CreateTask() {
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const [inputAlert, setInputAlert] = useState<null | 'date' | 'title'>(null)

    const currentDate = new Date().toISOString().split('T')[0]

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formTarget = event.target as typeof event.target & {
            title: {
                value: string
            },
            description: {
                value: string
            },
            date: {
                value: string
            }
        }
        const clearForm = () => {
            formTarget.title.value = '';
            formTarget.description.value = '';
            formTarget.date.value = currentDate
        }
        if (formTarget.title.value.length === 0) {
            setInputAlert('title')
            return
        }
        if (formTarget.date.value.length === 0) {
            setInputAlert('date')
            return
        }
        setInputAlert(null)
        if (formTarget.description.value.length === 0) {
            dispatch(addTask({
                name: formTarget.title.value,
                id: new Date().toISOString(),
                status: false,
                group: [],
                date: new Date(formTarget.date.value)
            }))
            clearForm()
            return
        }
        dispatch(addTask({
            name: formTarget.title.value,
            description: formTarget.description.value,
            id: new Date().toISOString(),
            status: false,
            group: [],
            date: new Date(formTarget.date.value)
        }))

        clearForm()
    };

    return (
        <div className='sticky top-5 h-min bg-stone-200 py-2 px-1'>
            <h2 className='text-xl font-semibold mb-4'>Create new task</h2>
            <form action="submit" onSubmit={handleSubmit} ref={formRef}>
                <label>
                    <p className="mb-2">Title:</p>
                    <input
                        className={inputAlert === 'title' ? 'outline outline-red-600' : ''}
                        type="text" name="title" placeholder='Type your title here' />
                </label>
                <label>
                    <p className="mb-2">Description</p>
                    <textarea
                        name="description"
                        placeholder='Type your description here'

                    />
                </label>
                <label>
                    <input
                        type="date"
                        name="date"
                        className={inputAlert === 'date' ? 'outline outline-red-600' : ''}
                        min={
                            currentDate
                        } />
                </label>
                <button type="submit" className='self-start block bg-blue-400 text-white px-2 py-1.5 rounded-xl'>Add Task</button>
            </form>
        </div>
    )
}
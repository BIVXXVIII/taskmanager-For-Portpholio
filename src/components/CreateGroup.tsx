import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { addGroup } from '../app/groupSlice'
export default function CreateGroup() {
    const formRef = useRef(null)
    const dispatch = useDispatch()
    const submitHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault()
        const target = event.target as typeof event.target & { title: { value: string } }
        dispatch(addGroup({
            name: target.title.value,
            id: 'group' + (new Date().toISOString()),
            color: 'green'
        }))

    }
    return (
        <div className='sticky top-5 h-min'>
            <h3 className='text-xl font-semibold mb-4'>Create group</h3>
            <form action="submit" onSubmit={submitHandler} ref={formRef}>
                <label>
                    <span className='mb-2 block'>Title</span>
                    <input type="text" name='title' placeholder='type group name' />
                </label>
                <button
                    type='submit'
                    className='self-start block bg-blue-400 text-white px-2 py-1.5 rounded-xl mt-2'>
                    create group
                </button>
            </form>
        </div>
    )
}
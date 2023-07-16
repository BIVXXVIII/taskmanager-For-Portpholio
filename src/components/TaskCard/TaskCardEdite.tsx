import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { TaskInterface } from '../../app/typesGlobal'
import { editTask } from '../../app/taskSlice';

type TaskCardEditProps = {
    task: TaskInterface,
    setEdit: React.Dispatch<React.SetStateAction<boolean>>,
    buttonClasses: string
}

export default function TaskCardEdit({ task, setEdit, buttonClasses }: TaskCardEditProps) {
    const editFormRef = useRef(null)
    const dispatch = useDispatch()

    const editTaskHandler = (event: React.SyntheticEvent<HTMLFormElement>) => {
        event.preventDefault();
        const target = event.target as typeof event.target & {
            title: { value: string },
            description: { value: string }
        }
        if (target.title.value.length === 0 && target.description.value.length === 0) {
            setEdit(false)
            return
        }
        if (target.title.value.length === 0) {
            dispatch(editTask({
                name: task.name,
                description: target.description.value,
                id: task.id,
                status: task.status,
                group: task.group,
                date: task.date
            }))
        }
        if (target.description.value.length === 0) {
            dispatch(editTask({
                name: target.title.value,
                description: task.description,
                id: task.id,
                status: task.status,
                group: task.group,
                date: task.date
            }))
        }
        if (target.title.value.length !== 0 && target.description.value.length !== 0) {
            dispatch(editTask({
                name: target.title.value,
                description: target.description.value,
                id: task.id,
                status: task.status,
                group: task.group,
                date: task.date
            }))
        }
        target.description.value = ''
        target.title.value = ''
        setEdit(false)
    }
    return (
        <>
            <form ref={editFormRef} onSubmit={editTaskHandler} className='flex flex-col'>
                <label>
                    <p>Title:</p>
                    <input name='title' type="text" />
                </label>
                <label>
                    <p>Description:</p>
                    <textarea name="description" />
                </label>
                <div className='flex justify-between'>
                    <button type="submit" className={buttonClasses}>edit</button>
                    <button className={buttonClasses} onClick={() => { setEdit(false) }}>close</button>
                </div>
            </form>
        </>
    )
}


import React, { useState, useEffect } from 'react'
import { TaskInterface } from '../app/typesGlobal';
import { useSelector } from 'react-redux'
import { RootState } from '../app/store';
import CardMenu from './TaskCard/CardMenu';
import CardDescription from './TaskCard/CardDescription';
import CardStatusPanel from './TaskCard/CardStatusPanel';
import CardSelectOverlay from './TaskCard/CardSelectOverlay';
import TaskCardEdit from './TaskCard/TaskCardEdite';
import CardGroups from './TaskCard/CardGroups';

type TaskCardProps = {
    task: TaskInterface
}

export default function TaskCard({ task }: TaskCardProps) {
    const [edit, setEdit] = useState(false)
    const viewMode = useSelector((state: RootState) => state.view.dashboardView)
    const selected = useSelector((state: RootState) => state.task.selectedTasks)
    const selectMode = useSelector((state: RootState) => state.view.selectMode)

    useEffect(() => {
        if (edit && selectMode) {
            setEdit(false)
        }
    }, [selectMode])

    const cardCoreClasses = 'p-3 pb-5 rounded-lg flex mb-3 duration-500 min-h-[120px] relative'
    const cardViewClasses = viewMode === 'grid' ?
        `${cardCoreClasses} w-[300px]` : cardCoreClasses
    const cardCompleteClasses = (task.status ? 'bg-green-200 ' : 'bg-orange-200 ') + cardViewClasses
    const selectedCardClasses = selected.includes(task) ? ' relative bottom-3 right-3 shadow-2xl' : ''
    const cardEditClasses = `${cardViewClasses} bg-blue-200 flex-col`
    const cardWrapperClasses = 'flex-grow flex flex-col justify-between';
    const titleClasses = 'font-bold text-lg mb-1';
    const buttonClasses = 'py-1 px-1.5 bg-slate-600 text-white hover:bg-purple-500 duration-200 rounded-md flex gap-2 items-center text-center';
    const dateClasses = task.status ?
        'self-end px-2 py-0.5 rounded-full relative left-8 bg-green-300 shadow-sm' :
        task.date
            .toISOString()
            .split('T')[0] === new Date()
                .toISOString()
                .split("T")[0] ?
            'self-end px-2 py-0.5 rounded-full relative left-8 bg-red-300 shadow-sm' :
            'self-end px-2 py-0.5 rounded-full relative left-8 bg-blue-300 shadow-sm';

    if (edit) {
        return <div className={cardEditClasses}>
            <TaskCardEdit
                task={task}
                setEdit={setEdit}
                buttonClasses={buttonClasses}
            />
        </div>
    }
    return (
        <div
            className={cardCompleteClasses + selectedCardClasses}
        >
            <CardSelectOverlay task={task} />
            <div className={cardWrapperClasses}>
                <div>
                    <h3 className={titleClasses}>{task.name}</h3>
                    <CardGroups task={task} />
                    <CardDescription
                        taskDescription={task.description}
                    />
                </div>
                <div className='flex justify-between'>
                    <CardStatusPanel task={task} />
                    <div className={dateClasses}>
                        {task.date.toLocaleDateString()}
                    </div>
                </div>
            </div>
            <CardMenu
                setEdit={setEdit}
                taskId={task.id}
                buttonClasses={buttonClasses}
            />
        </div>
    )
}
import { useState } from 'react'
import CardGroupsListbox from './CardGroupsListbox'
import { useDispatch } from 'react-redux'
import { addGroupToTask } from '../../app/taskSlice'
import { Group, TaskInterface } from '../../app/typesGlobal'


type AddGroupProps = {
    task: TaskInterface,
    allGroups: Group[]
}

export default function AddGroup({ allGroups, task }: AddGroupProps) {
    const dispatch = useDispatch()
    const [selectedGroup, setSelectedGroup] = useState(allGroups[0])

    return (
        <>
            <div className='relative mt-2'>
                <CardGroupsListbox
                    allGroups={allGroups}
                    selectedGroup={selectedGroup}
                    setSelectedGroup={setSelectedGroup}
                />
            </div>
            <button
                className='bg-stone-500 text-white px-2 py-0.5 mt-2 rounded-md'
                onClick={() => {
                    if (task.group.includes(selectedGroup)) return
                    dispatch(addGroupToTask({ group: selectedGroup, taskId: task.id }))
                }}
            >add</button>
        </>
    )
}
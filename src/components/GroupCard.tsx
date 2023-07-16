import React, { useState } from 'react'
import { Group, TaskInterface } from '../app/typesGlobal'
import { useDispatch, useSelector } from 'react-redux'
import { removeGroup, setGroupColor } from '../app/groupSlice'
import { groupColor } from '../assets/groupColor'
import type { KeyOfGroupColor } from '../assets/groupColor'
import { RootState } from '../app/store'
import { removeGroupFromTask } from '../app/taskSlice'
type GroupCardProps = {
    group: Group
}

export default function GroupCard({ group }: GroupCardProps) {
    const [optionsVisible, setOptionsVisible] = useState(false)
    const dispatch = useDispatch()
    const tasks = useSelector((state: RootState) => state.task.tasks)
    const removeGroupHandler = () => {
        tasks
            .filter((task: TaskInterface) => task.group.includes(group))
            .forEach((task: TaskInterface) => {
                dispatch(removeGroupFromTask({
                    groupId: group.id,
                    taskId: task.id
                }))
            })
        dispatch(removeGroup(group.id))
    }

    return (
        <div
            className={'flex min-w-[50px] h-min  px-4 py-1 rounded-lg  shadow-slate-700 shadow-sm select-none relative mb-3 justify-center ' + groupColor[group.color]}
            onClick={() => { setOptionsVisible(true) }}
        >
            <span>{group.name}</span>
            {optionsVisible ? <div
                className='absolute top-[120%] right-0 z-10 bg-slate-400 p-1 rounded-sm' onMouseLeave={() => { setOptionsVisible(false) }}>
                <div>
                    <div className='flex flex-wrap justify-center items-center'>{
                        Object.keys(groupColor).map((key) => {
                            let temp: KeyOfGroupColor = key as KeyOfGroupColor
                            return <div
                                className={`w-[15px] h-[15px] p-[2px] border-[1px] border-black ${groupColor[temp]}`}
                                onClick={() => {

                                    dispatch(setGroupColor({ groupId: group.id, color: temp }))
                                }}
                            />
                        })

                    }</div>
                </div>
                <div>
                    <button
                        className='text-white'
                        onClick={removeGroupHandler}>Delete</button>
                </div>

            </div> : null}

        </div>
    )
}
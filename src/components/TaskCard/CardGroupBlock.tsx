import React, { useState } from 'react'
import { Group } from '../../app/typesGlobal';
import { useDispatch } from 'react-redux';
import { removeGroupFromTask } from '../../app/taskSlice';
import { groupColor } from '../../assets/groupColor';

type Props = { group: Group, taskId: string }

export default function CardGroupBlock({ group, taskId }: Props) {
    const [optionsVisible, setOptionsVisible] = useState(false)
    const dispatch = useDispatch()
    const groupClasses = `flex min-w-[50px] h-min  px-4 py-1 rounded-lg  shadow-slate-700 shadow-sm select-none relative mb-3 justify-center ${groupColor[group.color]}`;

    return (
        <div
            className={groupClasses}
            onClick={() => { setOptionsVisible(true) }}

        >
            <p>{group.name}</p>

            <>
                {optionsVisible ? <ul
                    className='absolute top-[120%] right-0 z-10 bg-slate-400 p-1 rounded-sm' onMouseLeave={() => { setOptionsVisible(false) }}>
                    <li>
                        <button onClick={() => {
                            dispatch(removeGroupFromTask(
                                {
                                    groupId: group.id,
                                    taskId: taskId
                                }))
                        }}>Delete</button>
                    </li>

                </ul> : null}
            </>
        </div>

    )
}
import React from 'react'
import { Menu } from '@headlessui/react';
import { svgGalery } from '../../assets/Svg';
import { useDispatch } from 'react-redux'
import { deleteTask } from '../../app/taskSlice';
type CardMenuProps = {
    buttonClasses: string,
    setEdit: React.Dispatch<React.SetStateAction<boolean>>,
    taskId: string
}

export default function CardMenu(
    { buttonClasses, setEdit, taskId }: CardMenuProps
) {
    const dispatch = useDispatch()
    return (
        <Menu as={'div'} className='relative'>
            <Menu.Button className={'p-1 bg-gray-500 text-white rounded-xl'}>
                {svgGalery.cog}
            </Menu.Button>
            <Menu.Items className={'flex flex-col gap-1 absolute right-0'}>
                <Menu.Item>
                    <button
                        className={buttonClasses}
                        onClick={() => { setEdit(true) }}
                    >
                        {svgGalery.pencil}
                        Edit
                    </button>
                </Menu.Item>
                <Menu.Item>
                    <button
                        className={buttonClasses}
                        onClick={() => { dispatch(deleteTask(taskId)) }}
                    >
                        {svgGalery.trash}
                        Delete
                    </button>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    )
}
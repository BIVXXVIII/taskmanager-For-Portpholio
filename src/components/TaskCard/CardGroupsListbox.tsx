import React, { Fragment } from 'react'
import { Group } from '../../app/typesGlobal'
import { Listbox, Transition } from '@headlessui/react'
import { svgGalery } from '../../assets/Svg'

type CardListboxProps = {
    allGroups: Group[],
    selectedGroup: Group,
    setSelectedGroup: React.Dispatch<React.SetStateAction<Group>>
}

export default function CardGroupsListbox({ allGroups, selectedGroup, setSelectedGroup }: CardListboxProps) {
    return (
        <>
            <Listbox value={selectedGroup} onChange={setSelectedGroup}>
                <Listbox.Button
                    className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm "
                >
                    <span className='truncate block'>{selectedGroup.name}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-stone-600/50">{svgGalery.chevronDown}</span>
                </Listbox.Button>
                <Transition
                    as={Fragment}
                    enter='transition-opacity duration-75'
                    leave='transition ease-in duration-200'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <Listbox.Options className="absolute mt-1 max-h-[135px] w-full overflow-auto rounded-md bg-white py-1 px-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                        {
                            allGroups.map((group: Group) => (
                                <Listbox.Option
                                    key={group.id}
                                    value={group}
                                    className={({ active }) => `relative cursor-default select-none py-2 pl-10 pr-4 ${active ? 'bg-purple-600 text-white rounded-xl' : 'text-stone-900'}`}
                                >
                                    {({ selected }) => (
                                        <>
                                            <span>{group.name}</span>
                                            {selected ? (<span className='absolute inset-y-0 left-0 flex items-center pl-3 text-blue-400'>
                                                {svgGalery.check}
                                            </span>)
                                                : null
                                            }
                                        </>
                                    )}
                                </Listbox.Option>
                            ))}
                    </Listbox.Options>
                </Transition>
            </Listbox>
        </>
    )
}
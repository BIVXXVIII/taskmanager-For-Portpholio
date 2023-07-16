import { useState, Fragment, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Transition } from '@headlessui/react'
import { svgGalery } from '../assets/Svg'
import { Group } from '../app/typesGlobal'
import { RootState } from '../app/store'
import CreateGroup from '../components/CreateGroup'
import GroupCard from '../components/GroupCard'

export default function Groups() {
    const [createVisible, setCreateVisible] = useState(false)
    const groups = useSelector((state: RootState) => state.group.groups)
    const searchValue = useSelector((state: RootState) => state.view.search)
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight
    ])
    useEffect(() => {
        const handlerWindowResize = () => { setWindowSize([window.innerWidth, window.innerHeight]) }
        window.addEventListener('resize', handlerWindowResize)
        return () => {
            window.removeEventListener('resize', handlerWindowResize)
        }
    }, [])

    return (
        <div className='flex flex-grow'>
            <div className='flex-grow'>
                <div>Groups</div>
                {groups.length !== 0 ? <div className='flex-grow flex flex-wrap gap-2'>
                    {groups.filter((group: Group) => group.name.toLowerCase().includes(searchValue.toLowerCase())).map((group: Group) => <GroupCard group={group} key={group.id} />)}
                </div> : <div>here no group</div>}
            </div>
            <Transition
                as={Fragment}
                show={windowSize[0] <= 768 ? createVisible : true}
                enter='transition linear duration-100 origin-right'
                leave='transition ease-in duration-100 origin-right'
                enterFrom='scale-x-0 md:scale-x-100'
                enterTo='scale-x-100'
                leaveFrom='scale-x-100'
                leaveTo='scale-x-0 md:scale-x-100'
            >
                <div className={'p-4 border-l border-stone-400 md:w-[300px] w-full md:static md:block fixed left-0 right-0 top-20 bottom-0 md:visible bg-stone-200 z-40 pr-10 md:pr-4 pt-20 md:pt-4'}>
                    <CreateGroup />
                </div>
            </Transition>
            <button
                className='md:hidden fixed right-[-20px] bg-stone-600 p-2 pr-6 text-white rounded-full z-40'
                onClick={() => {
                    setCreateVisible(!createVisible)
                }}
            >
                {createVisible ? svgGalery.chevronRight : svgGalery.chevronLeft}
            </button>
        </div >
    )
}
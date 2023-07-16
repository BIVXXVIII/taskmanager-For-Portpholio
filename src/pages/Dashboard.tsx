import { useState, useEffect, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { Transition } from '@headlessui/react'
import { TaskInterface } from '../app/typesGlobal'
import { svgGalery } from '../assets/Svg'
import CreateTask from '../components/CreateTask'
import TaskCard from '../components/TaskCard'
import ViewModeToggler from '../components/Dashboard/ViewModeToggler'
import SelectedPanel from '../components/Dashboard/SelectedPanel'
import SortModeToggler from '../components/Dashboard/SortModeToggler'

export default function Dashboard() {
    const tasks = useSelector((state: RootState) => state.task.tasks)
    const viewMode = useSelector(
        (state: RootState) => state.view.dashboardView
    )
    const sortMode = useSelector((state: RootState) => state.view.sorted)
    const searchValue = useSelector((state: RootState) => state.view.search)
    const [menuVisible, setMenuVisible] = useState(false)
    const [stateTasks, setStateTasks] = useState<never[] | TaskInterface[]>([])
    const [createVisible, setCreateVisible] = useState(false)

    useEffect(() => {
        const filterTask = () => {
            const tempArr = [...tasks.filter((task: TaskInterface) => task.name.toLowerCase().includes(searchValue.toLowerCase()))]
            if (sortMode === 'all') {
                setStateTasks(tempArr)
                return
            }
            if (sortMode === 'completed') {
                setStateTasks(tempArr.filter((task: TaskInterface) => task.status))
                return
            }
            setStateTasks(tempArr.filter((task: TaskInterface) => !task.status))
        }
        filterTask()
    }, [sortMode, searchValue, tasks])
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
        <>
            <div className='flex flex-grow relative'>
                <div className='flex-grow p-4'>
                    <div className='flex justify-between items-center pb-4 flex-wrap relative'>
                        <h2 className='font-semibold text-xl'>Dashboard</h2>
                        <div>
                            <button
                                onClick={() => { setMenuVisible(!menuVisible) }}
                                className='md:hidden relative right-4 p-2 bg-stone-500 text-white rounded-lg'
                            >
                                {svgGalery.squares}
                            </button>
                            <div className={'items-center md:flex absolute right-4 z-20 bg-stone-300 md:bg-transparent md:static pb-4 pt-2 md:pt-0 md:pb-0' + (windowSize[0] <= 768 ? (menuVisible ? ' flex flex-col gap-2 shadow-md' : ' hidden') : '')}>
                                <SelectedPanel />
                                <SortModeToggler />
                                <ViewModeToggler />
                            </div>
                        </div>
                    </div>
                    <div className={viewMode === 'grid' ? 'flex gap-2 flex-wrap' : 'flex flex-col gap-2'}>
                        {stateTasks.length !== 0 ? stateTasks.map((task: TaskInterface) => <TaskCard key={task.id} task={task} />) :
                            <div className='font-semibold text-xl'>
                                No task found, create new task, or change view mode.
                            </div>}
                    </div>
                </div>
                <Transition
                    as={Fragment}
                    show={windowSize[0] <= 768 ? createVisible : true}
                    enter='transition-opacity duration-50 origin-right'
                    leave='transition ease-in duration-50 origin-right'
                    enterFrom='opacity-0 scale-x-0'
                    enterTo='opacity-100 scale-x-100'
                    leaveFrom='opacity-100 scale-x-100'
                    leaveTo='opacity-0 scale-x-0'
                >
                    <div className={'p-4 border-l border-stone-400 md:w-[300px] w-full md:static md:block fixed left-0 right-0 top-0 z-40 pr-10 md:pr-4 pt-20 md:pt-4 bottom-0 bg-stone-200'}>
                        <CreateTask />
                    </div>
                </Transition>
            </div>
            <button
                className='md:hidden fixed right-[-20px] bg-stone-600 p-2 pr-6 text-white rounded-full z-40'
                onClick={() => {
                    setCreateVisible(!createVisible)
                }}
            >
                {createVisible ? svgGalery.chevronRight : svgGalery.chevronLeft}
            </button>
        </>
    )
}
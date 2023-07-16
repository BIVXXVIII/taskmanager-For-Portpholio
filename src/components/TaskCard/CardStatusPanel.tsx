import { useDispatch } from 'react-redux'
import { svgGalery } from '../../assets/Svg'
import { toggleTask } from '../../app/taskSlice';
import { TaskInterface } from '../../app/typesGlobal';
type StatusPanelProps = { task: TaskInterface }

export default function CardStatusPanel({ task }: StatusPanelProps) {
    const dispatch = useDispatch()

    return (
        <div>
            <label className='flex items-center gap-2 text-md font-medium'>
                <span>Progress</span>
                <button
                    className={task.status ? 'p-2 bg-blue-500/90 text-white rounded-lg' : 'p-2 bg-stone-500/90 text-white rounded-lg'}
                    onClick={() => { dispatch(toggleTask(task.id)) }}>
                    {task.status ? svgGalery.check : svgGalery.xmark}
                </button>
            </label>
        </div>
    )
}
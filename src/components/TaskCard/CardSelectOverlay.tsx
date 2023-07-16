import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store';
import { addToSelected, removeFromSelected } from '../../app/taskSlice';
import { TaskInterface } from '../../app/typesGlobal';

type Props = { task: TaskInterface }

export default function CardSelectOverlay({ task }: Props) {
    const selectMode = useSelector((state: RootState) => state.view.selectMode)
    const selected = useSelector((state: RootState) => state.task.selectedTasks)
    const dispatch = useDispatch()

    return (
        <div
            className={selectMode ? 'absolute top-0 left-0 right-0 bottom-0' : 'hidden'}
            onClick={() => {
                if (selectMode) {
                    if (selected.includes(task)) {
                        dispatch(removeFromSelected(task.id))
                    } else {
                        dispatch(addToSelected(task.id))
                    }
                }
            }}>

        </div>
    )
}
import { useSelector } from 'react-redux'
import { Group, TaskInterface } from '../../app/typesGlobal'
import { RootState } from '../../app/store'
import AddGroup from './AddGroup'
import CardGroupBlock from './CardGroupBlock'

type CardGroupsProps = {
    task: TaskInterface
}

export default function CardGroups({ task }: CardGroupsProps) {
    const allGroups = useSelector((state: RootState) => state.group.groups)


    if (allGroups.length === 0) {
        return <></>
    }
    if (task.group.length === 0) {
        return <div>
            <h4>groups: <span>none</span></h4>
            <AddGroup allGroups={allGroups} task={task} />
        </div>
    }
    return (
        <div>
            <h4>groups:</h4>
            <div className='flex flex-wrap gap-1'>{task.group.map((group: Group) => <CardGroupBlock group={group} key={`${group.id}CardGroup`} taskId={task.id} />)}
            </div>
            <AddGroup allGroups={allGroups} task={task} />

        </div>
    )
}
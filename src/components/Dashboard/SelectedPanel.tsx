import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearSelected, deleteSelectedTask, toggleSelectedTask } from '../../app/taskSlice'
import { RootState } from '../../app/store'
import { svgGalery } from '../../assets/Svg'
import { toggleSelectMode } from '../../app/viewSlice'


export default function SelectedPanel() {
    const [hover, setHover] = useState(false)
    const [hoverMsg, setHoverMsg] = useState<'select' | 'delete selected' | 'change status' | 'clear select'>('select')
    const dispatch = useDispatch()
    const selectMode = useSelector((state: RootState) => state.view.selectMode)
    const panelClasses = 'flex justify-center items-center gap-1 px-4 relative'
    const btnClasses = 'p-2 border border-stone-900/30 text-stone-900 rounded-lg';
    const hoverClasses = hover ? 'absolute top-[-30px] text-sm border-stone-900/30 px-0.5 py-[1px] text-stone-900/30 rounded-lg border select-none duration-200 md:block hidden' : 'hidden opacity-0 duration-200';
    if (!selectMode)
        return <div className={panelClasses}
            onMouseOver={() => { setHover(true) }}
            onMouseLeave={() => { setHover(false) }}
        >
            <span className={hoverClasses}>{hoverMsg}</span>
            <button className={btnClasses}
                onClick={() => {
                    dispatch(toggleSelectMode())
                }}>
                {svgGalery.select}
            </button>
        </div>
    return (
        <div className={panelClasses}
            onMouseOver={() => { setHover(true) }}
            onMouseLeave={() => { setHover(false) }}
        >
            <span className={hoverClasses}>{hoverMsg}</span>
            <button
                className={'p-2 border bg-stone-900/30 rounded-lg text-white'}
                onClick={() => {
                    dispatch(toggleSelectMode())
                    dispatch(clearSelected())
                }}>
                {svgGalery.select}
            </button>
            <button
                className={btnClasses}
                onClick={() => { dispatch(deleteSelectedTask()) }}
                onMouseOver={() => { setHoverMsg('delete selected') }}
                onMouseLeave={() => { setHoverMsg('select') }}
            >{svgGalery.trash}</button>
            <button
                className={btnClasses}
                onClick={() => {
                    dispatch(toggleSelectedTask())
                }}
                onMouseOver={() => { setHoverMsg('change status') }}
                onMouseLeave={() => { setHoverMsg('select') }}
            >{svgGalery.pencilSquare}</button>
            <button
                className={btnClasses}
                onClick={() => { dispatch(clearSelected()) }}
                onMouseOver={() => { setHoverMsg('clear select') }}
                onMouseLeave={() => { setHoverMsg('select') }}
            >{svgGalery.xBucket}</button>
        </div>
    )
}
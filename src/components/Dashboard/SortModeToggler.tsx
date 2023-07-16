import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { svgGalery } from '../../assets/Svg';
import { RootState } from '../../app/store';
import { changeSortMode } from '../../app/viewSlice';


export default function SortModeToggler() {
    const [hover, setHover] = useState(false)
    const [hoverMsg, setHoverMsg] = useState<'show mode' | 'show all' | 'show complete' | 'show inprogress'>('show mode')
    const sortMode = useSelector((state: RootState) => state.view.sorted)
    const dispatch = useDispatch()
    const panelClasses = 'flex justify-center items-center gap-1 px-4 relative md:border-l border-stone-600/50'
    const btnClasses = 'p-2 text-stone-900 duration-200 rounded-lg';
    const activeButtonClasses = 'bg-stone-500 p-2 text-white rounded-lg hover:bg-purple-600 duration-200';
    const hoverClasses = hover ? 'absolute top-[-30px] text-sm border-stone-900/30 px-0.5 py-[1px] text-stone-900/30 rounded-lg border select-none duration-200 md:block hidden' : 'hidden opacity-0 duration-200';
    return (
        <div className={panelClasses}
            onMouseOver={() => { setHover(true) }}
            onMouseLeave={() => { setHover(false) }}
        >
            <span className={hoverClasses}>{hoverMsg}</span>
            <button
                onClick={() => { dispatch(changeSortMode('all')) }}
                className={sortMode === 'all' ? activeButtonClasses : btnClasses}
                onMouseOver={() => { setHoverMsg('show all') }}
                onMouseLeave={() => { setHoverMsg('show mode') }}
            >
                <span className='flex w-6 h-6 items-center justify-center font-bold'>All</span>
            </button>
            <button
                onClick={() => { dispatch(changeSortMode('completed')) }}
                className={sortMode === 'completed' ? activeButtonClasses : btnClasses}
                onMouseOver={() => { setHoverMsg('show complete') }}
                onMouseLeave={() => { setHoverMsg('show mode') }}
            >
                {svgGalery.check}
            </button>
            <button
                className={sortMode === 'inprogress' ? activeButtonClasses : btnClasses}
                onClick={() => { dispatch(changeSortMode('inprogress')) }}
                onMouseOver={() => { setHoverMsg('show inprogress') }}
                onMouseLeave={() => { setHoverMsg('show mode') }}
            >
                {svgGalery.xmark}
            </button>
        </div>
    )
}
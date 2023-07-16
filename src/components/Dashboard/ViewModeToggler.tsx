import { useState } from 'react'
import { svgGalery } from '../../assets/Svg'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store'
import { changeViewMode } from '../../app/viewSlice'


export default function ViewModeToggler() {
    const [hover, setHover] = useState(false)
    const [hoverMsg, setHoverMsg] = useState<'grid view' | 'list view' | 'view mode'>('view mode')
    const dispatch = useDispatch()
    const viewMode = useSelector((state: RootState) => state.view.dashboardView)

    const btnClasses = 'p-2 text-stone-900 duration-200 rounded-lg';
    const activeButtonClasses = 'bg-stone-500 p-2 text-white rounded-lg hover:bg-purple-600 duration-200';
    const panelClasses = 'flex justify-center items-center gap-1 pl-4 border-stone-600/50 md:border-l relative'
    const hoverClasses = hover ? 'absolute top-[-30px] text-sm border-stone-900/30 px-0.5 py-[1px] text-stone-900/30 rounded-lg border select-none duration-200 md:block hidden' : 'hidden opacity-0 duration-200';
    return (
        <div
            className={panelClasses}
            onMouseOver={() => { setHover(true) }}
            onMouseLeave={() => { setHover(false) }}
        >
            <span className={hoverClasses}>{hoverMsg}</span>

            <button
                className={viewMode === 'list' ? activeButtonClasses : btnClasses}
                onClick={() => { dispatch(changeViewMode('list')) }}
                onMouseOver={() => { setHoverMsg('list view') }}
                onMouseLeave={() => { setHoverMsg('view mode') }}
            >
                {svgGalery.list}
            </button>
            <button
                className={viewMode === 'grid' ? activeButtonClasses : btnClasses}
                onClick={() => { dispatch(changeViewMode('grid')) }}
                onMouseOver={() => { setHoverMsg('grid view') }}
                onMouseLeave={() => { setHoverMsg('view mode') }}
            >
                {svgGalery.squares}
            </button>
        </div>
    )
}
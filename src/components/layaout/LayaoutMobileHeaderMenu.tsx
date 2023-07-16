import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../app/store';
import { search } from '../../app/viewSlice';
import { svgGalery } from '../../assets/Svg';




export default function LayaoutMobileHeaderMenu() {
    const [menuVisible, setMenuVisible] = useState(false)
    const searchValue = useSelector((state: RootState) => state.view.search)
    const dispatch = useDispatch()
    const location = useLocation()

    const listClasses = 'py-2 border-b border-stone-500/30'
    const linkClasses = 'px-2 text-white font-semibold select-none';
    const activeLinkClasses = `${linkClasses} font-bold underline text-purple-700`;
    return (
        <div className='relative md:hidden'>
            <button
                className='text-white bg-stone-500 p-1 rounded-sm'
                onClick={() => {
                    setMenuVisible(!menuVisible)
                }}
            >{menuVisible ? svgGalery.xmark : svgGalery.menu}</button>
            <ul className={menuVisible ? 'absolute bg-gray-500 text-white px-2 right-[-5px] pb-6 rounded-md z-50' : 'hidden'}>
                <li className={listClasses}>
                    <Link to={'/'}
                        className={'/' === location.pathname ? activeLinkClasses : linkClasses}
                    >Dashboard</Link>
                </li>
                <li className={listClasses}>
                    <Link
                        to={'/groups'}
                        className={'/groups' === location.pathname ? activeLinkClasses : linkClasses}
                    >Groups</Link>
                </li>
                <li>
                    <input
                        className='p-2 rounded-md'
                        type="search"
                        name="search"
                        placeholder='search'
                        value={searchValue}
                        onChange={(event) => {
                            dispatch(search(event.target.value))
                        }} />
                </li>
            </ul>
        </div>
    )
}
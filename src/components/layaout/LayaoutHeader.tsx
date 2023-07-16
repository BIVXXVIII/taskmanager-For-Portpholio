import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { search } from '../../app/viewSlice';
import { RootState } from '../../app/store';
import LayaoutHeaderNav from './LayaouteHeaderNav';
import LayaoutMobileHeaderMenu from './LayaoutMobileHeaderMenu';

export default function LayaoutHeader() {
    const searchValue = useSelector((state: RootState) => state.view.search)
    const dispatch = useDispatch()
    const headerClasses = 'border-b border-stone-400/30 px-6 py-4 flex justify-between items-center';
    const headerTitleClasses = 'text-2xl font-bold';
    return (
        <header className={headerClasses}>
            <div className='flex items-center gap-10'>
                <h1 className={headerTitleClasses}>Task manager</h1>
                <LayaoutHeaderNav />
            </div>
            <LayaoutMobileHeaderMenu />
            <input
                className='p-2 rounded-md hidden md:inline-block'
                type="search"
                name="search"
                placeholder='search'
                value={searchValue}
                onChange={(event) => {
                    dispatch(search(event.target.value))
                }} />
        </header>
    )
}
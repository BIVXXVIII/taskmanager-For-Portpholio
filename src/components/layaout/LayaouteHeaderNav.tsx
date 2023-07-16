import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function LayaoutHeaderNav() {
    const linkClasses = 'px-2 font-semibold select-none';
    const inactiveLinkClasses = `${linkClasses} text-stone-800`
    const activeLinkClasses = `${linkClasses} font-bold underline text-purple-700`;
    const location = useLocation()
    return (
        <>
            <nav className='hidden md:block'>
                <Link to={'/'}
                    className={'/' === location.pathname ? activeLinkClasses : inactiveLinkClasses}
                >Dashboard</Link>
                <Link
                    to={'/groups'}
                    className={'/groups' === location.pathname ? activeLinkClasses : inactiveLinkClasses}
                >Groups</Link>
            </nav>

        </>
    )
}
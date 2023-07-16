import React from 'react'
import LayaoutHeader from './LayaoutHeader';

type LayaoutProps = {
    children: Array<React.ReactNode | string> | React.ReactNode
}

export default function Layaout({ children }: LayaoutProps) {

    const layaoutClasses = 'min-h-screen bg-stone-200 flex flex-col';
    return (
        <div className={layaoutClasses}>
            <LayaoutHeader />
            <main className='px-6 pt-7 pb-4 flex flex-col flex-grow relative overflow-hidden'>{children}</main>
        </div>
    )
}
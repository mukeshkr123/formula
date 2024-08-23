import { Sidebar } from '@/components/sidebar/sidebar'
import React from 'react'


interface Props {
    children: React.ReactNode
}

const MathLayout = ({ children }: Props) => {
    return (
        <div className='flex px-8 mx-auto'>
            <Sidebar />
            <main>
                {children}
            </main>
        </div>
    )
}



export default MathLayout
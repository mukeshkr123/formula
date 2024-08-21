import Navbar from '@/components/navbar/navbar'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const Mailayout = ({ children }: Props) => {
    return (
        <div className='w-full'>
            <Navbar />
            <main>{children}</main>
        </div>
    )
}

export default Mailayout
import { Footer } from '@/components/footer/footer'
import Navbar from '@/components/navbar/navbar'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const Mailayout = ({ children }: Props) => {
    return (
        <div className='w-full h-full'>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

export default Mailayout
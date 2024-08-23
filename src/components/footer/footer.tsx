import { categories, quickLinks, socialMediaLinks, supportLinks } from '@/constants'
import Link from 'next/link'
import React from 'react'

export const Footer = () => {
    return (
        <footer className='w-full border-b-0 border-t-[#EAEAEA] border-[1.8px]'>
            <div className='flex mx-auto max-w-5xl justify-between py-6'>
                <div className='space-y-3.5'>
                    <h3 className='text-[#171717] font-medium'>Quick Links</h3>
                    <div className='flex flex-col gap-y-2'>
                        {
                            quickLinks.map((item) => (
                                <Link href={item.path} className='text-[#666666] text-sm'>{item.text}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className='space-y-3.5'>
                    <h3 className='text-[#171717] font-medium'>Explore</h3>
                    <div className='flex flex-col gap-y-2'>
                        {
                            categories.map((item) => (
                                <Link href={item.path} className='text-[#666666] text-sm'>{item.text}</Link>
                            ))
                        }
                    </div>
                </div>
                <div className='space-y-3.5'>
                    <h3 className='text-[#171717] font-medium'>Social</h3>
                    <div className='flex flex-col gap-y-2'>
                        {
                            socialMediaLinks.map((item) => (
                                <Link href={item.url} className='text-[#666666] flex items-center gap-x-2 text-sm'>
                                    <item.icon className='size-5' />
                                    {item.text}
                                </Link>
                            ))
                        }
                    </div>
                </div>
                <div className='space-y-3.5'>
                    <h3 className='text-[#171717] font-medium'>Support</h3>
                    <div className='flex flex-col gap-y-2'>
                        {
                            supportLinks.map((item) => (
                                <Link href={item.path} className='text-[#666666] text-sm'>{item.text}</Link>
                            ))
                        }
                    </div>
                </div>
            </div>
        </footer>
    )
}

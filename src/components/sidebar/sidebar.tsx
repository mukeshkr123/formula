import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion'

const formulaSidebar = [
    {
        title: "Formula",
        contents: [
            {
                title: "Math Formulas",
                content: [
                    {
                        title: "Algebra"
                    }, {
                        title: "Geometry"
                    }
                ]
            },
            {
                title: "Physics Formulas",
                content: [
                    {
                        title: "Mechanics"
                    }, {
                        title: "Electromagnetism"
                    }
                ]
            }
        ]
    }
]

export const Sidebar = () => {
    return (
        <aside className='w-full h-full'>
            <div className='pt-10'>
                <div>
                    {
                        formulaSidebar.map(item => (
                            <div>
                                <h2>{item.title}</h2>
                                {
                                    item.contents.map(item1 => (
                                        <Accordion type='single' collapsible className='w-[200px]'>
                                            <AccordionItem value={item.title}>
                                                <AccordionTrigger>
                                                    {item1.title}
                                                </AccordionTrigger>
                                                <AccordionContent>
                                                    {
                                                        item1.content.map(item2 => (
                                                            <p>{item2.title}</p>
                                                        ))
                                                    }
                                                </AccordionContent>
                                            </AccordionItem>
                                        </Accordion>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
            </div>
        </aside>
    )
}

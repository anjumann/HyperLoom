import React from 'react'
import { Card } from '../ui/card'
import QuickCard from '../elements/QuickCard'

const QuickLinks = () => {
  return (
    <div className='w-11/12 md:w-10/12 lg:w-8/12 mx-auto mt-4 h-[70vh]'  >  
        <h3 className='eyebrow text-center ' >Quick Links</h3>
        <h3 className='heading-1 w-fit mx-auto mt-5' >Explore section</h3>
        <div className="mt-10 flex justify-between gap-4 ">
            <QuickCard className='quickCard-hover ' />
            <QuickCard className='quickCard-hover ' />
            <QuickCard className='quickCard-hover ' />
            <QuickCard className='quickCard-hover ' />

        </div>

    </div>
  )
}

export default QuickLinks
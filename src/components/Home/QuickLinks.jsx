import React from 'react'
import { Card } from '../ui/card'
import QuickCard from '../elements/QuickCard'

const QuickLinks = () => {
  return (
    <div className='screen-width mt-4 '  >  
        <h3 className='eyebrow text-center ' >Quick Links</h3>
        <h3 className='heading-1 w-fit mx-auto mt-5' >Explore section</h3>
        <div className="card-wrapper ">
            <QuickCard className='quickCard-hover ' />
            <QuickCard className='quickCard-hover ' />
            <QuickCard className='quickCard-hover ' />
            <QuickCard className='quickCard-hover ' />

        </div>

    </div>
  )
}

export default QuickLinks
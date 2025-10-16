import { PricingTable } from '@clerk/nextjs'
import React from 'react'

const Subscription = () => {
  return (
    <div className='items-center justify-center flex my-6 p-25 max-sm:p-5'>
      <PricingTable />
    </div>
  )
}

export default Subscription
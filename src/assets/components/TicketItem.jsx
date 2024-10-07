import React from 'react'

const TicketItem = ({item}) => {
  return (
    <li className='flex items-center justify-between py-[19px] px-[32px] border-b-[1px] border-[#DFE0EB]'>
        <h2 className='text-[14px] leading-[20px] text-[#252733]'>{item.title}</h2>
        <strong className='text-[14px] leading-[20px] text-[#9FA2B4]'>{item.num}</strong>
    </li>
  )
}

export default TicketItem
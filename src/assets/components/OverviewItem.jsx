import React from 'react'

const OverviewItem = ({item}) => {
  return (
    <li className='w-[258px] h-[134px] px-[32px] py-[24px] flex-col bg-white border-[2px] rounded-lg text-center'>
        <h2 className='text-[19px] leading-[23px] mb-[12px] text-[#9FA2B4]'>{item.title}</h2>
        <strong className='text-[40px] leading-[50px] text-[#252733]'>{item.number}</strong>
    </li>
  )
}

export default OverviewItem
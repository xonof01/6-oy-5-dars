import React from 'react'

const TodayItem = ({item}) => {
  return (
    <li className='w-full border-b-[1px] border-[#DFE0EB] py-[24px] px-[32px] flex-col'>
        <h2 className='text-[16px] leading-[22px] mb-[6px] text-[#9FA2B4]'>{item.title}</h2>
        <strong className='text-[24px] leading-[30px] text-[#252733]'>{item.number}</strong>
    </li>
  )
}

export default TodayItem
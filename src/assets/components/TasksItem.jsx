import React from 'react'

const TasksItem = ({item}) => {
  return (
    <li className='flex items-center justify-between py-[19px] px-[32px] border-b-[1px] border-[#DFE0EB]'>
        <strong className='text-[14px] leading-[20px] text-[#252733]'>{item.title}</strong>
        <button className='w-[74px] py-[5px] bg-[#FEC400] text-[11px] leading-[13px] text-center text-white rounded-lg'>Urgent</button>
    </li>
  )
}

export default TasksItem
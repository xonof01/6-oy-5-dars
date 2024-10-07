import React from 'react'
import OverviewItem from '../assets/components/OverviewItem'
import TodayItem from '../assets/components/TodayItem'
import TicketItem from '../assets/components/TicketItem'
import Add from '../assets/images/add.svg'
import TasksItem from '../assets/components/TasksItem'


const Overview = () => {
  const overviewData = [
    {
      id:1,
      title:"Unresolved",
      number:60
    },
    {
      id:2,
      title:"Overdue",
      number:16
    },
    {
      id:3,
      title:"Open",
      number:43
    },
    {
      id:4,
      title:"On Hold",
      number:64
    },
  ]
  const todayList = [
    {
      id:1,
      title:"Resolved", 
      number:449
    },
    {
      id:2,
      title:"Received", 
      number:426
    },
    {
      id:3,
      title:"Average first response time", 
      number:"33 m"
    },
    {
      id:4,
      title:"Average response time", 
      number:"3h 8m"
    },
    {
      id:5,
      title:"Resolution within SLA", 
      number:"94%"
    },
  ]
  const ticketList = [
    {
      id:1,
      title:"Waiting on Feature Request",
      num:4238
    },
    {
      id:2,
      title:"Awaiting Customer Response",
      num:1005
    },
    {
      id:3,
      title:"Awaiting Developer Fix",
      num:914
    },
    {
      id:1,
      title:"Pending",
      num:281
    }
  ]
  const taskList = [
    {
      id:1,
      title:"Finish ticket update"
    },
    {
      id:2,
      title:"Create new ticket example"
    },
    {
      id:3,
      title:"Update ticket report"
    }
  ]




  return (
    <div className='flex items-center flex-col mt-[54px]'>
      <ul className='flex items-center gap-[30px] mb-[30px]'>{overviewData.map(item => <OverviewItem item={item} key={item.id}/>)}</ul>
      <div className="w-full bg-white border-[1px] rounded-lg border-[#DFE0EB] flex">
        <div className="w-[70%] flex-col pl-[32px] pt-[32px]">
        <h2 className='text-[19px] leading-[23px] text-[#252733] mb-2'>Today’s trends</h2>
        <strong className='text-[12px] leading-[16px] text-[#9FA2B4]'>as of 25 May 2019, 09:41 PM</strong>
        </div>
        <ul className='w-[30%] flex items-center flex-col border-l-[1px] border-[#DFE0EB] text-center'>{todayList.map(item => <TodayItem item={item} key={item.id}/>)}</ul>
      </div>
      <div className="flex items-center gap-[30px] mt-[30px]">
          <div className="w-[546px] bg-white border-[1px] rounded-lg border-[#DFE0EB]">
            <div className="flex justify-between p-[32px]">
              <div className="flex-col">
                  <h3 className='text-[19px] leading-[23px] text-[#252733] mb-[8px]'>Unresolved tickets</h3>
                  <strong className='text-[12px] leading-[16px] text-black'>Group: Support</strong>
              </div>
              <button className='text-[14px] leading-[20px] text-[#3751FF]'>View details</button>
            </div>
            <ul className='flex-col'>{ticketList.map(item => <TicketItem item={item} key={item.id}/>)}</ul>
          </div>
          <div className="w-[546px] bg-white border-[1px] rounded-lg border-[#DFE0EB]">
            <div className="flex justify-between px-[32px] py-[19px]">
              <div className="flex-col">
                  <h3 className='text-[19px] leading-[23px] text-[#252733] mb-[8px]'>Tasks</h3>
                  <strong className='text-[12px] leading-[16px] text-[#DFE0EB]'>Today</strong>
              </div>
              <button className='text-[14px] leading-[20px] text-[#3751FF]'>View all</button>
            </div>
            <div className="flex-col">
              <form className='flex items-center justify-between px-[32px] py-[19px] border-b-[1px] border-[#DFE0EB]'>
                <input required type="text" className='w-full border-none outline-none' placeholder='Create new task' name='task'/>
                <button type='submit'>
                  <img src={Add} alt="add icon" width={24} height={24}/>
                </button>
              </form>
              <ul className='flex-col'>{taskList.map(item => <TasksItem item={item} key={item.id}/>)}</ul>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Overview
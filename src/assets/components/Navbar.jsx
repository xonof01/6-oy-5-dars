import React from 'react'
import { Logo, OverviewIcon, IdeasIcon, TicketsIcon} from '../images/Icons'
import NavbarItem from './NavbarItem'


const Navbar = () => {
    const navList = [
        {
            id:1,
            icon:<OverviewIcon/>,
            title:"Overview", 
            path:"/"
        },
        {
            id:2,
            icon:<TicketsIcon/>,
            title:"Tickets", 
            path:"/tickets"
        },
        {
            id:3,
            icon:<IdeasIcon/>,
            title:"Ideas", 
            path:"/ideas"
        }
    ]
  return (
    <div className='w-[20%] h-[180vh] bg-[#363740]'>
        <div className="pt-[27px] pl-[32px] pb-[39px] flex items-center space-x-4">
            <Logo/>
            <span className='text-[#A4A6B3] font-bold text-[18px]'>
                Dashboard Kit
            </span>
        </div>
        <nav>
            {navList.map(item => <NavbarItem key={item.id} item={item}/>)}
        </nav>
    </div>
  )
}

export default Navbar
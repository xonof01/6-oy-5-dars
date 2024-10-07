import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarItem = ({item}) => {
  return (
    <NavLink className={"flex items-center relative space-x-6 py-[18px] pl-8 text-[16px] text-[#A4A6B3] leading-5"} to={item.path}>
        {item.icon}
        <span>{item.title}</span>
    </NavLink>
  )
}

export default NavbarItem
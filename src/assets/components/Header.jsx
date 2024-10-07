import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { Bell, SearchIcon } from '../images/Icons'
import Avatar from "../images/avatar.svg"

const Header = () => {
    const [pathTitle, setPathTitle] = useState("Overview")
    const path = useLocation()

    function renderTitle(value){
        switch(value){
            case "/":
                setPathTitle("Overview")
            break;
            case "/tickets":
                setPathTitle("Tickets")
            break;
            case "/ideas":
                setPathTitle("Ideas")
            break;
        }
    }

    useEffect(() => {
        renderTitle(path.pathname)
    }, [path])
  return (
    <header>
        <div className="flex items-center justify-between w-[1122px] mx-auto">
            <h2 className='font-bold text-[24px] leading-[30px]'>{pathTitle}</h2>
            <div className="flex items-center gap-6">
                <button><SearchIcon/></button>
                <button><Bell/></button>
                <button className="border-[#C5C7CD] pl-[32px] border-l-[1px] flex items-center gap-[14px]">
                    <strong className='text-[14px] leading-[20px] text-[#252733]'>Jones Ferdidand</strong>
                    <img src={Avatar} alt="img" width={44} height={44}/>
                </button>
           </div>
        </div>
    </header>
  )
}

export default Header
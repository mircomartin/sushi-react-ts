import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowDown } from './icons'
import { type INav } from '../../interfaces/interfaces'

interface SubMenuMobileProps {
  item: INav
  openMenu: boolean
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const SubMenuMobile = ({ item, setOpenMenu, openMenu }: SubMenuMobileProps) => {
  const [toggleSubMenu, setToggleSubMenu] = useState(false)

  return (
    <li key={item.id} className='flex flex-col gap-2 font-semibold' onClick={() => setToggleSubMenu(!toggleSubMenu)}>
      <button className='flex items-center gap-2 uppercase'>
        {item.text}
        <ArrowDown color={'black'} toggleSubMenu={toggleSubMenu} />
      </button>
      <ul className={`${toggleSubMenu ? 'opacity-1 h-[auto] visible' : 'opacity-0 h-0 invisible'} transition-all duration-500 pl-5 flex flex-col gap-2`}>
        {item.submenu?.map((subLink) => (
          <li key={subLink.id} onClick={() => setOpenMenu(!openMenu)}>
            <NavLink className='font-semibold' to={subLink.url}>{subLink.text}</NavLink>
          </li>
        ))}
      </ul>
    </li>
  )
}

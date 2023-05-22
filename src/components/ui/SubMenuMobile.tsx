import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ArrowDown } from './icons'
import { type INav } from '../../interfaces/interfaces'

interface SubMenuMobileProps {
  item: INav
}

export const SubMenuMobile = ({ item }: SubMenuMobileProps) => {
  const [toggleSubMenu, setToggleSubMenu] = useState(false)

  return (
    <li key={item.id} className='flex flex-col font-semibold border-b-[1px] border-black pb-3' onClick={() => setToggleSubMenu(!toggleSubMenu)}>
      <button className='flex items-center gap-2 uppercase'>
        {item.text}
        <ArrowDown color={'black'} toggleSubMenu={toggleSubMenu} />
      </button>
      <ul className={`${toggleSubMenu ? 'opacity-1 h-[auto] visible' : 'opacity-0 h-0 invisible'} transition-all duration-400 pl-3 flex flex-col gap-2`}>
        {
          item.submenu?.map((subLink) => (
            <li key={subLink.id}>
              <NavLink className='font-semibold uppercase text-xs' to={subLink.url}>{subLink.text}</NavLink>
            </li>
          ))
        }
      </ul>
    </li>
  )
}

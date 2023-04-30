import { useState } from 'react'
import { nav } from '../../helpers/nav'
import { ArrowDown } from './icons'
import INSTAGRAM from './../../assets/instagram.svg'
import FACEBOOK from './../../assets/facebook.svg'

interface MenuMobileProps {
  openMenu: boolean
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuMobile = ({ openMenu, setOpenMenu }: MenuMobileProps) => {
  const [toggleSubMenu, setToggleSubMenu] = useState(false)

  if (openMenu) {
    document.querySelector('body')?.classList.add('overflow-hidden')
  } else {
    document.querySelector('body')?.classList.remove('overflow-hidden')
  }

  return (
    <div
      className={`${openMenu ? 'visible right-0 translate-x-0' : 'invisible translate-x-full'} transition-all duration-500 fixed w-full z-50 h-screen top-[70px] bg-white p-5 overflow-hidden md:hidden`}
    >
      <ul className="flex flex-col gap-5">
        {
          nav.map((item) => 
            (item.submenu !== undefined)
              ? 
                <li key={item.id} className="flex flex-col gap-2 font-medium" onClick={() => setToggleSubMenu(!toggleSubMenu)}>
                  <button className="flex items-center gap-2 uppercase">
                    {item.text}
                    <ArrowDown color={'black'} toggleSubMenu={toggleSubMenu} />
                  </button>
                  <ul className={`${toggleSubMenu ? 'opacity-1 h-[auto] visible' : 'opacity-0 h-0 invisible'} transition-all duration-500 pl-5 flex flex-col gap-2`}>
                    {item.submenu?.map((subLink) => (
                      <li key={subLink.id} onClick={() => setOpenMenu(!openMenu)}>
                        <a href={subLink.url}>{subLink.text}</a>
                      </li>
                    ))}
                  </ul>
                </li>
              : 
                <a key={item.id} href={item.url} className="font-medium uppercase" onClick={() => setOpenMenu(!openMenu)}>
                  {item.text}
                </a>
          )
        }
      </ul>
      <div className="flex gap-4 center mt-10">
        <a href='https://www.instagram.com/madame.butterfly.sushi/' className='transition-all duration-500 hover:scale-125'>
          <img src={INSTAGRAM} alt="Instagram" />
        </a>
        <a href='https://www.facebook.com/MadameButterflySushiBar/' className='transition-all duration-500 hover:scale-125'>
          <img src={FACEBOOK} alt="Facebook" />
        </a>
      </div>
    </div>
  )
}

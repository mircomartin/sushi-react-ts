import { NavLink } from 'react-router-dom'
import UseAnimations from 'react-useanimations'
import instagram from 'react-useanimations/lib/instagram'
import facebook from 'react-useanimations/lib/facebook'
import { SubMenuMobile } from './SubMenuMobile'
import { type INav } from '../../interfaces/interfaces'

interface MenuMobileProps {
  openMenu: boolean
  nav: INav[]
}

export const MenuMobile = ({ nav, openMenu }: MenuMobileProps) => {

  if (openMenu) {
    document.querySelector('body')?.classList.add('overflow-hidden')
  } else {
    document.querySelector('body')?.classList.remove('overflow-hidden')
  }

  return (
    <div className={`${openMenu && 'bg-black bg-opacity-50 h-screen w-screen left-0 top-[56px] fixed'}`}>
      <div
        className={`${openMenu ? 'visible translate-x-0 right-0' : 'invisible translate-x-full -right-full'} transition-all duration-500 fixed z-50 h-screen top-[56px] bg-white p-5 overflow-hidden md:hidden`}
      >
        <ul className='flex flex-col gap-3'>
          {
            nav.map((item) => 
              item.submenu !== undefined
                ? 
                <SubMenuMobile key={item.id} item={item} />
                : 
                item.url !== null 
                &&
                  <li key={item.id} className='border-b-[1px] border-black pb-3'>
                    <NavLink  to={ item.url} className='font-semibold uppercase'>
                      {item.text}
                    </NavLink>
                  </li>
            )
          }
        </ul>
        <div className='flex gap-4 center mt-10'>
          <a href='https://www.instagram.com/madame.butterfly.sushi/'>
            <UseAnimations animation={instagram} size={34} />
          </a>
          <a href='https://www.facebook.com/MadameButterflySushiBar/'>
            <UseAnimations animation={facebook} size={34} />
          </a>
        </div>
      </div>
    </div>
  )
}

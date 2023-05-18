import { NavLink } from 'react-router-dom'
import UseAnimations from 'react-useanimations'
import instagram from 'react-useanimations/lib/instagram'
import facebook from 'react-useanimations/lib/facebook'
import { SubMenuMobile } from './SubMenuMobile'
import { nav } from '../../helpers/nav'

interface MenuMobileProps {
  openMenu: boolean
  setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuMobile = ({ openMenu, setOpenMenu }: MenuMobileProps) => {

  if (openMenu) {
    document.querySelector('body')?.classList.add('overflow-hidden')
  } else {
    document.querySelector('body')?.classList.remove('overflow-hidden')
  }

  return (
    <div
      className={`${openMenu ? 'visible right-0 translate-x-0' : 'invisible translate-x-full'} transition-all duration-500 fixed w-full z-50 h-screen top-[56px] bg-white p-5 overflow-hidden md:hidden`}
    >
      <ul className="flex flex-col gap-5">
        {
          nav.map((item) => 
            item.submenu !== undefined
              ? 
              <SubMenuMobile key={item.id} item={item} setOpenMenu={setOpenMenu} openMenu={openMenu} />
              : 
              item.url !== null 
              &&
                <NavLink key={item.id} to={ item.url} className="font-semibold uppercase" onClick={() => setOpenMenu(!openMenu)}>
                  {item.text}
                </NavLink>
          )
        }
      </ul>
      <div className="flex gap-4 center mt-10">
        <a href='https://www.instagram.com/madame.butterfly.sushi/'>
          <UseAnimations animation={instagram} size={34} />
        </a>
        <a href='https://www.facebook.com/MadameButterflySushiBar/'>
          <UseAnimations animation={facebook} size={34} />
        </a>
      </div>
    </div>
  )
}

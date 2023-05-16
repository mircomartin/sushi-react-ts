import { NavLink } from 'react-router-dom'
import { SubMenuMobile } from './SubMenuMobile'
import { nav } from '../../helpers/nav'
import INSTAGRAM from './../../assets/instagram.svg'
import FACEBOOK from './../../assets/facebook.svg'

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
      className={`${openMenu ? 'visible right-0 translate-x-0' : 'invisible translate-x-full'} transition-all duration-500 fixed w-full z-50 h-screen top-[70px] bg-white p-5 overflow-hidden md:hidden`}
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
                <NavLink key={item.id} to={ item.url} className="font-medium uppercase" onClick={() => setOpenMenu(!openMenu)}>
                  {item.text}
                </NavLink>
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

import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useStickyHeader } from '../../hooks/useStickyHeader'
import { MenuMobile } from './MenuMobile'
import { ArrowDown, CloseMobile, HamburgerIcon } from './icons'
import { nav } from '../../helpers/nav'
import LOGO from './../../assets/logo.png'
import INSTAGRAM from './../../assets/instagram.svg'
import FACEBOOK from './../../assets/facebook.svg'

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const { header } = useStickyHeader()
  
  return (
    <header className="bg-slate-950 p-2 animated" ref={header}>
      <MenuMobile openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className="container flex items-center justify-between">
        <Link to='/' className='flex flex-1'>
          <figure className="flex gap-4 items-center">
            <img src={LOGO} alt="Logo" className="w-20 h-auto" />
            <figcaption className="font-semibold text-lg text-white uppercase tracking-widest">Madame Butterfly</figcaption>
          </figure>
        </Link>
        <nav className="hidden md:flex justify-center gap-10">
        {
          nav.map((link) => (
            <div className="menu-link lvl1 flex items-center gap-2 py-3" key={link.id}>
              {
                link.submenu !== undefined 
                  ? 
                    <>
                      <button className="flex gap-2 items-center tracking-wider">
                        {link.text}
                        <ArrowDown />
                      </button>
                      <ul className="mt-3">
                        {link.submenu?.map((link) => (
                          <li key={link.id}>
                            <NavLink to={link.url}>{link.text}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  : link.url !== undefined && <NavLink className="tracking-wider" to={link.url}>{link.text}</NavLink>
              }
            </div>
          ))
        }
        </nav>
        <div className="md:flex-1">
          <button className="flex justify-end md:hidden" onClick={() => setOpenMenu(!openMenu)}>
            {!openMenu ? <HamburgerIcon /> : <CloseMobile />}
          </button>
          <div className="hidden md:flex gap-4 justify-end">
            <a href='https://www.instagram.com/madame.butterfly.sushi/' className='transition-all duration-500 hover:scale-125'>
              <img src={INSTAGRAM} alt="Instagram" />
            </a>
            <a href='https://www.facebook.com/MadameButterflySushiBar/' className='transition-all duration-500 hover:scale-125'>
              <img src={FACEBOOK} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}

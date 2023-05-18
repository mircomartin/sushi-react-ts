import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import UseAnimations from 'react-useanimations'
import instagram from 'react-useanimations/lib/instagram'
import facebook from 'react-useanimations/lib/facebook'
import menu3 from 'react-useanimations/lib/menu3'
import { useStickyHeader } from '../../hooks/useStickyHeader'
import { MenuMobile } from './MenuMobile'
import { ArrowDown } from './icons'
import { nav } from '../../helpers/nav'
import LOGO from './../../assets/logo.png'

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const { header } = useStickyHeader()
  return (
    <header className={`bg-slate-950 py-2 px-2 md:py-4 animated ${openMenu ? 'opened sticky-custom' : 'bg-slate-950'}`} ref={header}>

      <MenuMobile openMenu={openMenu} setOpenMenu={setOpenMenu} />

      <div className='container flex items-center justify-between'>
        <Link to='/' className='flex flex-1'>
          <figure className='flex gap-4 items-center'>
            <img src={LOGO} alt='Logo' className='w-12 md:w-20 h-auto' />
            <figcaption className='text-lg text-white uppercase tracking-widest'>Madame Butterfly</figcaption>
          </figure>
        </Link>
        <nav className='hidden md:flex justify-center gap-10'>
        {
          nav.map((link) => (
            <div className='menu-link lvl1 flex items-center gap-2 py-3' key={link.id}>
              {
                link.submenu !== undefined 
                  ? 
                    <>
                      <button className='flex items-center tracking-wider'>
                        {link.text}
                        <ArrowDown />
                      </button>
                      <ul className='mt-3 submenu'>
                        {link.submenu?.map((link) => (
                          <li key={link.id}>
                            <NavLink to={link.url}>{link.text}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </>
                  : link.url !== null && <NavLink className='tracking-wider' to={link.url}>{link.text}</NavLink>
              }
            </div>
          ))
        }
        </nav>
        <div className='md:flex-1'>
          <button className='flex justify-end md:hidden'>
            <UseAnimations onClick={() => setOpenMenu(!openMenu)} animation={menu3} size={40} strokeColor='white' />
          </button>
          <section className='hidden md:flex gap-4 justify-end'>
            <a href='https://www.instagram.com/madame.butterfly.sushi/'>
              <UseAnimations animation={instagram} size={34} strokeColor='white' />
            </a>
            <a href='https://www.facebook.com/MadameButterflySushiBar/'>
              <UseAnimations animation={facebook} size={34} strokeColor='white' />
            </a>
          </section>
        </div>
      </div>
      
    </header>
  )
}

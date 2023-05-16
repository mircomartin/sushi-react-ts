import { Link } from 'react-router-dom'
import LOGO from './../../assets/logo.png'
import INSTAGRAM from './../../assets/instagram.svg'
import FACEBOOK from './../../assets/facebook.svg'

export const Footer = () => {
  return (
    <footer className="bg-slate-950 px-1 py-5 md:px-2 md:py-10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10">
          <Link to='/' className='flex'>
            <figure className="block">
              <img src={LOGO} alt="Logo" className="w-20 h-auto" />
            </figure>
          </Link>
          <div>
            <p className="text-white text-center text-sm font-semibold">© 2023 Madame Butterfly. Todos los derechos reservados. Desarrollado por <a href="https://www.linkedin.com/in/mirco-martin-a3b70670/">Mirco Martin</a></p>
          </div>
          <div className="flex gap-4 justify-end">
            <a href='https://www.instagram.com/madame.butterfly.sushi/' className='transition-all duration-500 hover:scale-125'>
              <img src={INSTAGRAM} alt="Instagram" />
            </a>
            <a href='https://www.facebook.com/MadameButterflySushiBar/' className='transition-all duration-500 hover:scale-125'>
              <img src={FACEBOOK} alt="Facebook" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Link } from 'react-router-dom'
import UseAnimations from 'react-useanimations'
import instagram from 'react-useanimations/lib/instagram'
import facebook from 'react-useanimations/lib/facebook'
import LOGO from './../../assets/logo.png'

export const Footer = () => {
  return (
    <footer className='bg-[#080808] py-5 px-2 md:py-10'>
      <div className='container'>
        <div className='flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10'>
          <Link to='/' className='flex'>
            <figure className='block'>
              <img src={LOGO} alt='Logo' className='w-20 h-auto' />
            </figure>
          </Link>
          <div>
            <p className='text-white text-center text-sm'>© 2023 Madame Butterfly. Todos los derechos reservados. Desarrollado por <a className='text-[#D13E2A] hover:underline' href='https://www.linkedin.com/in/mirco-mart%C3%ADn-a3b70670/'>Mirco Martin</a></p>
          </div>
          <div className='flex gap-4 justify-end'>
            <a href='https://www.instagram.com/madame.butterfly.sushi/'>
              <UseAnimations animation={instagram} size={40} strokeColor='white' />
            </a>
            <a href='https://www.facebook.com/MadameButterflySushiBar/'>
              <UseAnimations animation={facebook} size={40} strokeColor='white' />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

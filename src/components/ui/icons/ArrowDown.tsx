export const ArrowDown = ({ color, toggleSubMenu }: { color?: string; toggleSubMenu?: boolean }) => {
  
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={`w-[15px] h-[15px] text-${color !== undefined ? color : 'white'} hover:text-[#1d120e] ${toggleSubMenu === false || toggleSubMenu === undefined ? 'rotate-0' : 'rotate-180'} transition-all duration-300`}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
    </svg>
  )
}

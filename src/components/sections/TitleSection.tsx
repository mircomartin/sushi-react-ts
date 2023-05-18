export const TitleSection = ({ title }: { title: string }) => {
  return (
    <div className='bg-[#B6262F] py-6 md:py-16'>
      <div className='container px-5 md:px-0'>
        <h2 className='text-white uppercase font-bold md:text-6xl text-2xl italic'>{title}</h2>
      </div>
    </div>
  )
}

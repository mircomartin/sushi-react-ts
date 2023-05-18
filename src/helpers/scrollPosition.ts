export const scrollPosition = ({ header }: { header: HTMLElement }) => {
  let scrollPosition = 0
  const submenu = document.querySelectorAll('.submenu')

  window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY
    if (scrollPosition > 150) {
      header.classList.add('sticky-custom')
      header.classList.add('fadeInDown')
      submenu.forEach((item) => item.classList.add('transparent-custom'))
    } else {
      header.classList.remove('sticky-custom')
      header.classList.remove('fadeInDown')
      submenu.forEach((item) => item.classList.remove('transparent-custom'))
    }
  })
}

export const scrollPosition = ({ header }: { header: HTMLElement }) => {
  let scrollPosition = 0
  window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY
    if (scrollPosition > 150) {
      header.classList.add('sticky-custom')
      header.classList.add('fadeInDown')
    } else {
      header.classList.remove('sticky-custom')
      header.classList.remove('fadeInDown')
    }
  })
}

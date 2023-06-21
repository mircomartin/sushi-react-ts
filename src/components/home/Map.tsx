import { AnimationOnScroll } from 'react-animation-on-scroll'

export const Map = () => {
  return (
    <AnimationOnScroll animateIn='animate__fadeInUp' animateOnce={true}>
      <div>
        <iframe src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13392.151579725098!2d-60.640599!3d-32.9500089!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab40d2772c5d%3A0xa42b56e42b548082!2sMadame%20Butterfly!5e0!3m2!1ses!2sar!4v1682588136852!5m2!1ses!2sar' width='100%' height='600' loading='lazy' referrerPolicy='no-referrer-when-downgrade'></iframe>
      </div>
    </AnimationOnScroll>
  )
}

import { useEffect } from 'react'

export default function useScrollToTop() {
  useEffect(() => {
    const scrollToTopBtn = document.getElementById('scrollToTop')
    if (!scrollToTopBtn) return

    function toggleScrollTopButton() {
      const isMobile = window.innerWidth < 768
      const scrolled = window.scrollY > 300
      if (isMobile && scrolled) scrollToTopBtn.classList.add('show')
      else scrollToTopBtn.classList.remove('show')
    }

    window.addEventListener('scroll', toggleScrollTopButton)
    window.addEventListener('resize', toggleScrollTopButton)

    function onClick(e) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    scrollToTopBtn.addEventListener('click', onClick)
    // initialize state
    toggleScrollTopButton()

    return () => {
      window.removeEventListener('scroll', toggleScrollTopButton)
      window.removeEventListener('resize', toggleScrollTopButton)
      scrollToTopBtn.removeEventListener('click', onClick)
    }
  }, [])
}

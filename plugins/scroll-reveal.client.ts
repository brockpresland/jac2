export default defineNuxtPlugin(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  const revealSelector = '.reveal'
  const pending = new Set<HTMLElement>()

  const setProgress = () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const progress = scrollable > 0 ? window.scrollY / scrollable : 0

    document.documentElement.style.setProperty('--scroll-progress', String(Math.min(progress, 1)))
    document.documentElement.style.setProperty('--scroll-y', String(window.scrollY))
  }

  const revealPassedElements = () => {
    pending.forEach((element) => {
      if (element.getBoundingClientRect().top > window.innerHeight * 0.9) return

      element.classList.add('is-visible')
      pending.delete(element)
    })
  }

  const revealElements = () => {
    const elements = [...document.querySelectorAll<HTMLElement>(revealSelector)]

    if (reduceMotion.matches || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return
    }

    elements.forEach((element, index) => {
      element.style.setProperty('--reveal-delay', `${Math.min(index % 6, 5) * 80}ms`)
      pending.add(element)
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return

          entry.target.classList.add('is-visible')
          pending.delete(entry.target as HTMLElement)
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.16
      }
    )

    elements.forEach((element) => observer.observe(element))
    revealPassedElements()
  }

  window.addEventListener(
    'scroll',
    () => {
      setProgress()
      revealPassedElements()
    },
    { passive: true }
  )
  window.addEventListener('resize', () => {
    setProgress()
    revealPassedElements()
  })

  requestAnimationFrame(() => {
    setProgress()
    revealElements()
  })
})

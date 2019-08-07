const defaultCallback = (target: Element) => {
  if (target instanceof HTMLImageElement) {
    const { src, srcset } = target.dataset
    if (src) target.src = src
    if (srcset) target.srcset = srcset

    target.addEventListener(
      'load',
      () => target.setAttribute('data-loaded', ''),
      { once: true }
    )
  }
}

const inob = (
  target: string | Element | Element[] | NodeListOf<Element> = '.inob',
  callback = defaultCallback,
  options?: IntersectionObserverInit
) => {
  // Skip Server-Side Rendering
  if (typeof window === 'undefined') return

  const observer = new IntersectionObserver(entries => {
    entries.forEach(({ isIntersecting, target }) => {
      if (isIntersecting) {
        observer.unobserve(target)
        callback(target)
      }
    })
  }, options)

  if (typeof target === 'string')
    document.querySelectorAll(target).forEach(item => observer.observe(item))
  else if (target instanceof Element) observer.observe(target)
  else if (
    target instanceof NodeList ||
    (Array.isArray(target) && target.every(item => item instanceof Element))
  )
    target.forEach((item: Element) => observer.observe(item))
  else throw new TypeError('[InOb] Invalid target')

  return observer
}

export { inob }

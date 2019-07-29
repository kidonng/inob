const defaultCallback = target => {
  target.src = target.dataset.src
  // Add [data-loaded] attribute
  target.onload = () => (target.dataset.loaded = true)
}

export default (
  selector = '[data-src]',
  callback = defaultCallback,
  options
) => {
  // Skip SSR
  if (typeof window !== 'undefined') {
    const observer = new IntersectionObserver(
      ([{ isIntersecting, target }]) => {
        if (isIntersecting) {
          observer.unobserve(target)
          callback(target)
        }
      },
      options
    )

    let items = null
    if (typeof selector === 'string')
      items = document.querySelectorAll(selector)
    else if (selector instanceof Element) items = [selector]
    else if (selector instanceof NodeList || Array.isArray(selector))
      items = selector

    items.forEach(item => observer.observe(item))

    return observer
  }
}

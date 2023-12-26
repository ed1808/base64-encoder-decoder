export const toggleMenu = () => {
  const menu = document.querySelector('.nav__bottom-section')

  if (menu.style.height === '') {
    menu.style.height = 'calc(100vh - 76px)'
    menu.style.padding = '16px 0'
  } else {
    menu.style.height = ''
    menu.style.padding = ''
  }
}

export const selectMenuOpt = (itemClassList) => {
  const sectionName = Array.from(itemClassList).pop(),
    selectedSection = document.querySelector(`.${sectionName}-section`),
    menuBtn = document.querySelector('.toggle-menu'),
    userDetails = navigator.userAgent,
    regexp = /android|iphone|ipad|kindle/i,
    isMobile = regexp.test(userDetails)

  if (selectedSection.classList.contains('fade-out')) {
    selectedSection.classList.remove('fade-out')
    selectedSection.classList.add('fade-in')

    if (isMobile) {
        menuBtn.click()
    }
  }

  const sections = document.querySelectorAll(
    `.section:not(.${sectionName}-section)`
  )

  sections.forEach(section => {
    if (!section.classList.contains('fade-out')) {
      section.classList.remove('fade-in')
      section.classList.add('fade-out')
      section.querySelector('input[type="text"]').value = ''
    }
  })
}

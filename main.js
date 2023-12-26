import { toggleMenu, selectMenuOpt } from './js/menu.js'
import { submitForm } from './js/formValidator.js'
import { copyToClipboard, outputMsg } from './js/copyToClipboard.js'
import { changePlaceholder } from './js/utils.js'

const toggleBtn = document.querySelector('.toggle-menu'),
      navItems = document.querySelectorAll('.nav__item'),
      options = document.querySelectorAll('input[type="radio"]'),
      forms = document.querySelectorAll('form'),
      tooltips = document.querySelectorAll('.tooltip'),
      currentYearText = document.querySelector('#current-year')

document.addEventListener('DOMContentLoaded', () => {
  const currentYear = new Date().getFullYear()

  toggleBtn.addEventListener('click', () => {
    toggleMenu()
  })

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      selectMenuOpt(item.classList)
    })
  })

  options.forEach(option => {
    option.addEventListener('click', function () {
      changePlaceholder(this)
    })
  })

  forms.forEach(form => {
    form.addEventListener('submit', function (event) {
      event.preventDefault()
      submitForm(this)
    })
  })

  tooltips.forEach(tooltip => {
    tooltip.addEventListener('click', function () {
      copyToClipboard(this)
    })

    tooltip.addEventListener('mouseout', function () {
      outputMsg(this)
    })
  })

  currentYearText.textContent = currentYear
})

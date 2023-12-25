import { setButtonName, setEventIcon } from "./js/switch.js"
import { copyToClipboard, outputMsg } from "./js/copyToClipboard.js"
import { submitForm } from "./js/formValidator.js"

document.addEventListener('DOMContentLoaded', () => {
  const currentYearElem = document.querySelector('#current-year'),
        switchOption = document.querySelector('#fs'),
        copyBtn = document.querySelector('.copy-clipboard'),
        form = document.querySelector('.input__form'),
        currentYear = new Date().getFullYear()

  currentYearElem.textContent = currentYear

  switchOption.addEventListener('change', function() {
    setButtonName(this.checked)
    setEventIcon(this.checked)
  })

  copyBtn.addEventListener('click', copyToClipboard)
  copyBtn.addEventListener('mouseout', outputMsg)

  form.addEventListener('submit', function(event) {
    event.preventDefault()
    submitForm(this)
  })
})

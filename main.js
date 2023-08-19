import { setButtonName, setEventIcon } from "./js/switch"
import { copyToClipboard, outputMsg } from "./js/copyToClipboard"
import { submitForm } from "./js/formValidator"

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

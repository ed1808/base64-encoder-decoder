export const generateAlert = (text) => {
  let alert, alertIcon, closeAlertBtn, alertText

  alert = document.createElement('dialog')

  alertIcon = document.createElement('span')
  closeAlertBtn = document.createElement('button')

  alertText = document.createElement('p')

  alert.classList.add('action-alert')
  alertIcon.classList.add('material-symbols-outlined')
  closeAlertBtn.classList.add('close-btn')

  closeAlertBtn.innerHTML = 'close'
  alertIcon.innerHTML = 'error'

  closeAlertBtn.addEventListener('click', () => {
    alert.close()
    alert.remove()
  })

  alertText.innerHTML = text

  alert.appendChild(alertIcon)
  alert.appendChild(alertText)
  alert.appendChild(closeAlertBtn)

  return alert
}

export const changePlaceholder = (elem) => {
  const input = document.querySelector('#input-b64'),
    output = document.querySelector('#response-b64')

  if (elem.value === 'encode') {
    input.placeholder = 'Hello World!'
    output.textContent = 'SGVsbG8gV29ybGQh'
  } else {
    input.placeholder = 'SGVsbG8gV29ybGQh'
    output.textContent = 'Hello World!'
  }
}

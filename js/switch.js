export function setButtonName(checked) {
    const submitBtn = document.querySelector('.submit-btn')

    if (checked) {
        submitBtn.textContent = 'Encode'
    } else {
        submitBtn.textContent = 'Decode'
    }
}

export function setEventIcon(checked) {
    const decodeIcon = document.querySelector('.decode-img'),
          encodeIcon = document.querySelector('.encode-img')

    if (checked) {
        decodeIcon.classList.add('hidden')
        encodeIcon.classList.remove('hidden')
    } else {
        decodeIcon.classList.remove('hidden')
        encodeIcon.classList.add('hidden')
    }
}
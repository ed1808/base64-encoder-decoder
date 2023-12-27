import { generateAlert } from './utils.js'

export const submitForm = async (form) => {
    let error = '', endpoint = '', generatedAlert

    const formData = new FormData(form),
        data = Object.fromEntries(formData),
        keys = Object.keys(data),
        identifier = keys.slice(keys.length - 1).pop().split('-').pop(),
        inputVal = data[keys[keys.length - 1]],
        submitBtn = form.querySelector('button[type="submit"]'),
        loader = form.querySelector('.loader-container'),
        output = document.querySelector(`#response-${identifier}`)

    if (keys.length > 1 && 'option' in data) {
        endpoint = `api/${data.option}/${identifier}`
    } else {
        endpoint = `api/encode/${identifier}`
    }

    if (inputVal === '') {
        error = 'Empty strings are not allowed'
    } else if (inputVal.startsWith(' ')) {
        error = 'No heading blank spaces allowed'
    }

    if (error !== '') {
        generatedAlert = generateAlert(error)

        generatedAlert.classList.add('show', 'showAlert')
        document.body.prepend(generatedAlert)
        generatedAlert.showModal()

        return
    }

    submitBtn.classList.add('hidden')
    loader.classList.remove('hidden')

    const params = {
        inputVal
    }

    const requestOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    }

    let response

    try {
        response = await fetch(`https://encoderdecoder-1-b6510573.deta.app/${endpoint}`, requestOptions)
    } catch (error) {
        generatedAlert = generateAlert(error)

        generatedAlert.classList.add('show', 'showAlert')
        document.body.prepend(generatedAlert)
        generatedAlert.showModal()

        submitBtn.classList.remove('hidden')
        loader.classList.add('hidden')

        return
    }

    if (!response.ok) {
        generatedAlert = generateAlert(response.statusText)

        generatedAlert.classList.add('show', 'showAlert')
        document.body.prepend(generatedAlert)
        generatedAlert.showModal()

        submitBtn.classList.remove('hidden')
        loader.classList.add('hidden')

        return
    }

    const result = await response.json()

    if (result.msg === 'error') {}

    output.textContent = result.data.outputVal

    if (!output.classList.contains('active')) {
        output.classList.add('active')
    }

    submitBtn.classList.remove('hidden')
    loader.classList.add('hidden')
}
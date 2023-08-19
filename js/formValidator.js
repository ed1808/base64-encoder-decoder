export function submitForm(form) {
    let error = '',
    endpoint = ''

    const errorText = document.querySelector('#error-msg'),
          inputText = document.querySelector('.input-field'),
          submitBtn = document.querySelector('.submit-btn'),
          loader = document.querySelector('.loader-container'),
          formData = new FormData(form),
          inputVal = formData.get('input-field'),
          encodeOption = formData.get('flipswitch'),
          output = document.querySelector('#result')

    if (inputVal == '') {
        error = 'Empty strings are not allowed'
    } else if (inputVal.startsWith(' ')) {
        error = 'No blank spaces allowed'
    }

    if (error != '') {
        errorText.textContent = error

        if (errorText.classList.contains('hidden')) {
            errorText.classList.remove('hidden')
        }
        
        if (!inputText.classList.contains('error')) {
            inputText.classList.add('error')
        }

        setTimeout(() => {
            errorText.classList.add('hidden')
            inputText.classList.remove('error')
        }, 2000)

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

    if (encodeOption) {
        endpoint = 'api/encode'
    } else {
        endpoint = 'api/decode'
    }

    fetch(`https://encoderdecoder-1-b6510573.deta.app/${endpoint}`, requestOptions)
    .then(response => response.json())
    .then(result => {
        output.value = result.outputVal
        submitBtn.classList.remove('hidden')
        loader.classList.add('hidden')
    })
    .catch(err => console.error(err))
}
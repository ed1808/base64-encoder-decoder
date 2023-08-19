export function copyToClipboard() {
    const resultText = document.querySelector('#result'),
          tooltip = document.querySelector('#tooltip')
    resultText.select()
    resultText.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(resultText.value)

    tooltip.textContent = "Copied!"
}

export function outputMsg() {
    const tooltip = document.querySelector('#tooltip')

    tooltip.textContent = 'Copy to clipboard'
}
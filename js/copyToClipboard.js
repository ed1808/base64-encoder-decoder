export const copyToClipboard = (parentElem) => {
  const identifier = parentElem.querySelector('.tooltip-text').id.split('-').pop(),
    resultText = document.querySelector(`#response-${identifier}`),
    tooltip = parentElem.querySelector('.tooltip-text')

  navigator.clipboard.writeText(resultText.textContent)

  tooltip.textContent = 'Copied to clipboard!'
}

export const outputMsg = (parentElem) => {
  const tooltip = parentElem.querySelector('.tooltip-text')

  tooltip.textContent = 'Copy to clipboard'
}

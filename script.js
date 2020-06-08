let fahrenheitButton = document.getElementById(`fahrenheitButton`)
let fahrenheitParagraph = document.getElementById(`fahrenheitParagraph`)
let celsius = document.getElementById(`celsius`)

fahrenheitButton.addEventListener(`click`, showFahrenheit)

function showFahrenheit() {
  let celsiusValue = celsius.value.trim()

  if (celsiusValue == `` || isNaN(celsiusValue)) {
    fahrenheitParagraph.innerHTML = `Please type a number.`
  }
  else {
    let fahrenheitValue = (celsiusValue * 9 / 5) + 32
    fahrenheitParagraph.innerHTML = `${celsiusValue} degrees Celsius is ${fahrenheitValue} degrees Fahrenheit.`
  }
}
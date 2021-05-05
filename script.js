let inchesButton = document.getElementById(`inchesButton`)
let inchesParagraph = document.getElementById(`inchesParagraph`)
let feet = document.getElementById(`feet`)

let secondsButton = document.getElementById(`secondsButton`)
let secondsParagraph = document.getElementById(`secondsParagraph`)
let minutes = document.getElementById(`minutes`)

let fahrenheitButton = document.getElementById(`fahrenheitButton`)
let fahrenheitParagraph = document.getElementById(`fahrenheitParagraph`)
let celsius = document.getElementById(`celsius`)

inchesButton.addEventListener(`click`, showInches)
secondsButton.addEventListener(`click`, showSeconds)
fahrenheitButton.addEventListener(`click`, showFahrenheit)

feet.focus()

function showInches() {
  let feetValue = feet.value.trim()

  if (feetValue == ``) {
    inchesParagraph.innerHTML = `Type a number.`
  } else {
    let inchesValue = feetValue * 12
    inchesParagraph.innerHTML = `${feetValue} feet is ${inchesValue} inches.`
  }
}

function showSeconds() {
  let minutesValue = minutes.value.trim()

  if (minutesValue == ``) {
    secondsParagraph.innerHTML = `Type a number.`
  } else {
    let secondsValue = minutesValue * 60
    secondsParagraph.innerHTML = `${minutesValue} minutes is ${secondsValue} seconds.`
  }
}

function showFahrenheit() {
  let celsiusValue = celsius.value.trim()

  if (celsiusValue == ``) {
    fahrenheitParagraph.innerHTML = `Type a number.`
  } else {
    let fahrenheitValue = (celsiusValue * 9) / 5 + 32
    fahrenheitParagraph.innerHTML = `${celsiusValue} degrees Celsius is ${fahrenheitValue} degrees Fahrenheit.`
  }
}

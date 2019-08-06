var celsiusInput = document.getElementById("celsius");
var showFahrenheitButton = document.getElementById("showFahrenheit");
var fahrenheitParagraph = document.getElementById("fahrenheit");

showFahrenheitButton.addEventListener("click", showFahrenheit);

function showFahrenheit() {
    var celsius = celsiusInput.value.trim();

    if (celsius == "" || isNaN(celsius)) {
        fahrenheitParagraph.innerHTML = "Please type a number.";
    }
    else {
        var fahrenheit = 9 / 5 * parseInt(celsius, 10) + 32;
        fahrenheitParagraph.innerHTML = parseInt(celsius, 10) + " degrees Celsius is " + parseInt(fahrenheit, 10) + " degrees Fahrenheit.";
    }
}

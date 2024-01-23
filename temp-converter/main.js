function calculateTemp() {
  var result = document.getElementById("result");
  result.innerHTML = "";
  var temp = document.getElementById("temp").value;
  var temp_diff = document.getElementById("temp_diff").value;

  var convertedTemp;

  if (isNaN(temp)) {
    result.innerHTML = "Please enter a valid number";
    return;
  }

  // Check if the selected option is celcius
  if (temp_diff == "cel") {
    convertedTemp = (temp * 9 / 5) + 32;
    result.innerHTML = temp + "°C is " + convertedTemp.toFixed(2) + "°F";
  }
  // Check if the selected option is fahrenheit
  else if (temp_diff == "fah") {
    convertedTemp = (temp - 32) * 5 / 9;
    result.innerHTML = temp + "°F is " + convertedTemp.toFixed(2) + "°C";
  }

  // Hide the result element after 3 seconds
  setTimeout(function () {
    result.innerHTML = "";
  }, 10000);
}

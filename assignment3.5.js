

function convertTemperature(start, scale){
    if (scale == "C") {
        let fahrenheit = (start * 9/5) + 32;
        console.log(fahrenheit)
    }

    if (scale == "F") {
        let celsius = (start - 32) * (5 / 9);
        console.log(celsius)
    }
};



convertTemperature(100, "C");



// Create a function called convertTemperature that takes two parameters: start (a number), and scale (a string containing either "C" for Celsius or "F" for Fahrenheit).

// For the temperature, use an if statement to check the scale parameter. If it is "C", convert the temperature to Fahrenheit using the formula: Fahrenheit = (Celsius * 9/5) + 32. If it is "F", convert the temperature to Celsius using the formula: Celsius = (Fahrenheit - 32) * 5/9.

// Display the converted temperature in the console.
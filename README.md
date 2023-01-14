# scientific calculator and unit converter

## Overview

This code defines a number of mathematical functions that perform various calculations, including:

- Solving quadratic equations
- Calculating the area of various shapes (square, triangle, circle, cone, cylinder)
- Converting between temperature units (Fahrenheit to Celsius and vice versa)
- Performing trigonometric, logarithmic, and exponential calculations
- Calculating factorials
- Calculating standard deviations
- Checking if a number is a prime

## Installation

A quick introduction of the minimal setup you need to get a up & running.
```
npm i @maorisr/scientific-calculator
```

## Usage


Here is a list of all the functions defined in the code, a brief description of what they do, and examples of how to use them:

- **quadratic(a, b, c):** Solves a quadratic equation in the form ax^2 + bx + c = 0, and returns the roots of the equation as a string.
	- **Example:** 
			```
			console.log(quadratic(1, -3, 2));
			```
			returns: The roots are: [2, 1]
- **squareArea(side):** Calculates the area of a square with the given side length, and returns the result as a string.
	- **Example:** 
			```
			console.log(squareArea(5));
			```
			returns: The square area is: 25
- **triangleArea(base, height):** Calculates the area of a triangle with the given base and height, and returns the result as a string.
	- **Example:** 
			```
			console.log(triangleArea(5, 8));
			```
			returns: The triangle area is: 20
- **circleArea(radius):** Calculates the area of a circle with the given radius, and returns the result as a string.
	- **Example:** 
			```
			console.log(circleArea(5));
			```
			returns: The circle area is: 78.53981633974483
- **coneArea(radius, slantHeight):** Calculates the area of a cone with the given radius and slant height, and returns the result as a string.
	- **Example:** 
			```
			console.log(coneArea(5, 10));
			```
			returns: The cone area is: 157.07963267948966
- **cylinderArea(radius, height):** Calculates the area of a cylinder with the given radius and height, and returns the result as a string.
	- **Example:** 
			```
			console.log(cylinderArea(5, 10));
			```
			returns: The cylinder area is: 392.6990816987241
- **fahrenheitToCelsius(fahrenheit):** Converts the given temperature from Fahrenheit to Celsius, and returns the result as a string.
	- **Example:** 
			```
			console.log(fahrenheitToCelsius(32));
			```
			returns: 32 Fahrenheit in Celsius is: 0
- **celsiusToFahrenheit(celsius):** Converts the given temperature from Celsius to Fahrenheit, and returns the result as a string.
	- **Example:** 
			```
			console.log(celsiusToFahrenheit(0));
			```
			returns: 0 Celsius in Fahrenheit is: 32
- **sin(x):** Calculates the sine of the given angle x in radians, and returns the result as a string.
	- **Example:** 
			```
			console.log(sin(1));
			```
			returns: Sin 1 is: 0.8414709848
- **degreesToRadians(x):** Converts the given angle x from degrees to radians, and returns the result as a string.
	- **Example:** 
			```
			console.log(degreesToRadians(180));
			```
			returns: 180 Degrees in Radians is: 3.141592653589793
- **radiansToDegrees(x):** Converts the given angle x from radians to degrees, and returns the result as a string.
	- **Example:** 
			```
			console.log(radiansToDegrees(3.14));
			```
			returns: 3.14 Radians in Degrees is: 179.9087476710785
- **factorial(x):** Calculates the factorial of the given number x, and returns the result as a string.
	- **Example:** 
			```
			console.log(factorial(5));
			```
			returns: The factorial of 5 is: 120
- **standardDeviation(arr):** Calculates the standard deviation of the given array of numbers and returns the result as a string.
	- **Example:** 
			```
			console.log(standardDeviation([1, 2, 3, 4, 5]));
			```
			returns: The standard deviation is: 1.5811388300841898
- **isPrime(n):** checks if the given number is prime or not and returns the result as a string.
	- **Example:** 
			```
			console.log(isPrime(5));
			```
			returns: 5 is a Prime

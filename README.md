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
- **cos(x):** Calculates the cosine of the given angle x in radians, and returns the result as a string.
	- **Example:** 
			```
			console.log(cos(5));
			```
			returns: Cos 5 is: 0.28366218546322625
- **tan(x):** Calculates the tangent of the given angle x in radians, and returns the result as a string.
	- **Example:** 
			```
			console.log(tan(5));
			```
			returns: Tan 5 is: -3.380515006246586
- **log(x):** Calculates the natural logarithm (base e) of the given number x, and returns the result as a string.
	- **Example:** 
			```
			console.log(log(5));
			```
			returns: Log 5 is: 1.6094379124341003
- **ln(x):** Calculates the natural logarithm (base e) of the given number x, and returns the result as a string.
	- **Example:** 
			```
			console.log(ln(5));
			```
			returns: Ln 5 is: 1.6094379124341003
- **exp(x):** Calculates the exponential function e^x of the given number x, and returns the result as a string.
	- **Example:** 
			```
			console.log(exp(5));
			```
			returns: Exp 5 is: 148.4131591025766
- **sqrt(x):** Calculates the square root of the given number x, and returns the result as a string.
	- **Example:** 
			```
			console.log(sqrt(5));
			```
			returns: Sqrt 5 is: 2.23606797749979
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
			
## Example code

```javascript
const scientificCalculator = require('@maorisr/scientific-calculator')
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(scientificCalculator.standardDeviation(numbers));
console.log(scientificCalculator.quadratic(1,2,-3))
console.log(scientificCalculator.squareArea(5));
console.log(scientificCalculator.triangleArea(5,7));
console.log(scientificCalculator.circleArea(5));
console.log(scientificCalculator.coneArea(5,7));
console.log(scientificCalculator.cylinderArea(5,7));
console.log(scientificCalculator.fahrenheitToCelsius(50));
console.log(scientificCalculator.celsiusToFahrenheit(10));
console.log(scientificCalculator.sin(5));
console.log(scientificCalculator.cos(5));
console.log(scientificCalculator.tan(5));
console.log(scientificCalculator.log(5));
console.log(scientificCalculator.ln(5));
console.log(scientificCalculator.exp(5));
console.log(scientificCalculator.sqrt(5));
console.log(scientificCalculator.degreesToRadians(5));
console.log(scientificCalculator.radiansToDegrees(5));
console.log(scientificCalculator.factorial(5));
console.log(scientificCalculator.isPrime(5));
```

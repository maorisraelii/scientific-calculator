function quadratic(a, b, c) {
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return `The roots are: [${root1}, ${root2}]`;
    } else if (discriminant === 0) {
        let root = -b / (2 * a);
        return `The root is: [${root}]`;
    } else {
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        return `The roots are: [{r: ${realPart}, i: ${imaginaryPart}}, {r: ${realPart}, i: ${-imaginaryPart}}]`;
    }
}

function squareArea(side) {
    return `The square area is: ${side * side}`;
}

function triangleArea(base, height) {
    return `The triangle area is: ${(base * height) / 2}`;
}

function circleArea(radius) {
    return `The circle area is: ${Math.PI * radius * radius}`;
}

function coneArea(radius, slantHeight) {
    return `The cone area is: ${Math.PI * radius * (radius + slantHeight)}`;
}

function cylinderArea(radius, height) {
    return `The cylinder area is: ${(2 * Math.PI * radius * height) + (2 * Math.PI * radius * radius)}`;
}

function fahrenheitToCelsius(fahrenheit) {
    return `${fahrenheit} Fahrenheit in Celsius is: ${(fahrenheit - 32) * 5/9}`;
}

function celsiusToFahrenheit(celsius) {
    return `${celsius} Celsius in Fahrenheit is: ${(celsius * 9/5) + 32}`;
}

function sin(x) {
    return `Sin ${x} is: ${Math.sin(x)}`;
}

function cos(x) {
    return `Cos ${x} is: ${Math.cos(x)}`;
}

function tan(x) {
    return `Tan ${x} is: ${Math.tan(x)}`;
}

function log(x) {
    return `Log ${x} is: ${Math.log(x)}`;
}

function ln(x) {
    return `Ln ${x} is: ${Math.log(x)}`;
}

function exp(x) {
    return `Exp ${x} is: ${Math.exp(x)}`;
}

function sqrt(x) {
    return `Sqrt ${x} is: ${Math.sqrt(x)}`;
}

function degreesToRadians(x) {
    return `${x} Degrees in Radians is: ${x * (Math.PI / 180)}`;
}

function radiansToDegrees(x) {
    return `${x} Radians in Degrees is: ${x * (180 / Math.PI)}`;
}
בג
function factorial(x) {
    let f = 1;
    for (let i = 2; i <= x; i++) {
        f *= i;
    }
    return `The factorial of ${x} is: ${f}`;
}

function standardDeviation(arr) {
    let sum = 0;
    let mean;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    mean = sum / arr.length;
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += (arr[i] - mean) ** 2;
    }
    return `The standard deviation is: ${Math.sqrt(sum / arr.length)}`;
}

function isPrime(n) {
    if (n <= 1) {
        return `${n} is not a Prime`;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return `${n} is not a Prime`;
        }
    }
    return `${n} is a Prime`;
}



exports.standardDeviation = standardDeviation;
exports.isPrime = isPrime;
exports.sin = sin;
exports.cos = cos;
exports.tan = tan;
exports.log = log;
exports.ln = ln;
exports.exp = exp;
exports.sqrt = sqrt;
exports.degreesToRadians = degreesToRadians;
exports.radiansToDegrees = radiansToDegrees;
exports.factorial = factorial;
exports.celsiusToFahrenheit = celsiusToFahrenheit;
exports.fahrenheitToCelsius = fahrenheitToCelsius;
exports.cylinderArea = cylinderArea;
exports.coneArea = coneArea;
exports.circleArea = circleArea;
exports.triangleArea = triangleArea;
exports.squareArea = squareArea;
exports.quadratic = quadratic;

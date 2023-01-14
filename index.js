// Function to solve quadratic equation
function quadratic(a, b, c) {
    // calculate the discriminant
    let discriminant = b * b - 4 * a * c;
    if (discriminant > 0) {
        // real and distinct roots
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        return [root1, root2];
    } else if (discriminant === 0) {
        // real and equal roots
        let root = -b / (2 * a);
        return [root];
    } else {
        // complex roots
        let realPart = -b / (2 * a);
        let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
        return [{r: realPart, i: imaginaryPart}, {r: realPart, i: -imaginaryPart}];
    }
}

exports.quadratic = quadratic;

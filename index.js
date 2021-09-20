var rect = require('./rectangle')

function solveRect(l,b) {
    console.log("Solving for rectangle with l=" + l + " and width=" + b);
    if (l <=0 || b <=0 ) {
        console.log("Rectangle dimensions should be greater than zero: l= " + l + ", width b=" + b);
        }

    else {
        console.log("The area of rectangle is " + rect.area(l,b));
        console.log("The perimeter of rectangle is " + rect.perimeter(l,b));
    }
}

solveRect(1,2);
solveRect(1,0);
solveRect(1,-3);
solveRect(10,2);
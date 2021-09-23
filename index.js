var rect = require('./rectangle')

function solveRect(l,b) {
    console.log("Solving for rectangle with l=" + l + " and width=" + b);
    
    rect(l,b, (err, rectangle) => {
        if(err) {
            console.log("ERROR: ", err.message)
        }
        else {
            console.log("The area of reactangle of dimenssions l = " + l + " and b = " + b + " is" + rectangle.area());
            console.log("The perimeter of reactangle of dimenssions l = " + l + " and b = " + b + " is" + rectangle.perimeter());
        }
    })

solveRect(1,2);
solveRect(1,0);
solveRect(1,-3);
solveRect(10,2);
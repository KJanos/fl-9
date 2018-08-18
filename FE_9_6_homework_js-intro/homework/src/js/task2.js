let a = prompt('Enter a length:');
let b = prompt('Enter b length:');
let alpha = prompt('Enter angle:');
let cons = 180;
let angle = alpha/ cons * Math.PI;
let c = Math.sqrt(a*a + b*b - 2 * a * b * Math.cos(angle));
let p = Number(a) + Number(b) + Number(c);
let piv = p/2;
let s = Math.sqrt(piv*(piv - a) * (piv - b) * (piv - c));
if (a > 0 && b > 0 && alpha < cons && alpha > 0){
    console.log('c length: ' + Math.floor(c*100)/100 + '\n' +
                'Triangle square: ' + Math.floor(s*100)/100 + '\n' +
                'Triangle perimeter: ' + Math.floor(p*100)/100 + '\n'
    )
    } else{
        console.log('Invalid data')
    }


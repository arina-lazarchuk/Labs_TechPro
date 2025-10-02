let a = 6.45;
let x = Math.pow(Math.E, -Math.PI).Math.pow(Math.PI, -Math.E);
let y = Math.log10(a**3) - Math.atan(a);
let numerator = Math.pow(x, Math.PI) + Math.pow(Math.E, -x) + 0.12;
let denominator = Math.sqrt(Math.abs(Math.sin(y-1)));
let f = numerator/denominator;

console.log("f=", f);
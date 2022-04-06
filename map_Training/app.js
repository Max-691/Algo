// Multiply nb of an array by 2
let array = [1, 2, 3, 4];
let multiply = array.map(x =>{
   return x*2
})
console.log(multiply)


// Return pairs numbers
let array1 = [1, 2, 3, 4, 5, 6];
let transform = array1.filter(a => {
    return a % 2 === 0
})
console.log(transform)


const addition = (a, b) => a + b;

function calculatrice(a, b, calcul){
    return calcul (a, b)
}
calculatrice(3, 2, addition)
console.log(calculatrice)
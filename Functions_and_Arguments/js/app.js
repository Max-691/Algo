//Write function named "addition" who take 2 nb as arguments
function addition (a, b){
    return a + b;
}
let addition_result = addition(1, 2);


//Ecrire une autre function qui prend 2 nb en arguments + une chaine de caractère si la chaine de caractère est un + ça retourne l'opération selon le signe
function operation (a, b, phrase){
    if (phrase === "+") {
        return a + b;
    }
    if (phrase === "-") {
        return a - b;
    }
    if (phrase === "*") {
        return a * b;
    }
    if (phrase === "/" && b !== 0) {
        return a / b;
    }
    else{
        alert("Retry without 0");
    }
}
console.log(operation(2, 3, "/"));


// Same thing with Switch Case
function operation1 (a, b, phrase1){
    switch(phrase1){
        case "+": return a+b;
        case "-": return a-b;
        case "*": return a*b;
        case "/": return b!= 0 ? a/b: null;
    }
}
console.log("Cette function a 2 nb en arguments avec une string et selon le signe stocké dans la string cela fera l'opération"  + operation1(2, 3, "-"));


// Write function named tranform with an array as arguments and return a new array with +1 for all elements
function transform (arr){
    const tmp = [];
   for (const el of arr) {
    tmp.push(el + 1);
   }
   return tmp;
}
console.log("Ajoute 1 à chaque élément du tableau"  + transform([1, 2, 3, 4]));


// Rewrite transform function with one array as arg + a number that will add to tmp
//In this case el2 can be compared to i in a for loop
function transform2(arr2, f){
    const tmp = [];
    for (const el2 of arr2) {
        tmp.push(f(el2));
    }
    return tmp;
}
console.log(transform2([1, 2, 3], function(a + 5){
    return a+b)
} ));

let R = [1, 2, 3].map(function(y){
    return y - 3})
})
[-2, -1, 0]; //It will return this
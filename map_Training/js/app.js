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


//.map and DOM algos

const body = document.body;

//calcul medium of int array with map
const nb1 = [10, 20, 5, 15];
let tmp1 = 0;
const nb1Map = nb1.map(e =>{
    tmp1 += e / nb1.length;
})
console.log(tmp1);

// add sum of int array with map
const nb2 = [74, 8, -36, 14, 20];
let tmp2 = 0;
const nb2Map = nb2.map(e =>{
   tmp2 += e;
})
console.log(tmp2)


//calculate number of p
const allP = document.querySelectorAll('#sum-of-p p');
console.log(allP.length)

//if nb = pair add p with nb + pair. else add p with unpair as content 

for (let i = 0; i < 10; i++) {
    const Pairdiv = document.getElementById('pair');
    const evenUl = document.createElement('ul');
    Pairdiv.appendChild(evenUl);
    const oddUl = document.createElement('ul');
    Pairdiv.appendChild(oddUl);
    if (i % 2 === 0) {
        const pairLi = document.createElement('li').textContent="Pair number:" + i;
        evenUl.appendChild(pairLi);
    }
    else{
        const unpairLi = document.createElement('li').textContent="Unpair number:" + i;
        oddUl.appendChild(unpairLi);
    }
}
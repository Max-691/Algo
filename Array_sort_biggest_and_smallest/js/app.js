const nb = [1, 7, 95, -3, 02, 54];
let tmp = nb[0];

for (let i = 0; i < nb.length; i++){
    if(nb[i] > tmp){
        tmp = nb[i];
    }
    
}
console.log(tmp);



// Using prompt:
const ask = parseInt(prompt('Enter 1 number')); 
// let arr = [ask];
// arr.push();
// ask.split('')

// let temp = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > temp) {
//         temp = arr[i];
//     }
// }
// console.log(temp);

//demander un nombre
//regarder si il est plus grand que le dernier dans le tableau
// let T = [0];
//let nb = prompt('Enter number between 1 and 26. It will be //return the letter\'s position');
//let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", //"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", //"v", "w", "x", "y", "z"];
//
//for (let i = 0; i < alphabet.length; i++) {
//    console.log(alphabet[i]+ ' '+ i )
//}
//console.log(alphabet[nb - 1]);

// Enter letter who return their position

const nb2 = prompt('Enter letter (a-z) It will return the occurence number');
let alphabet2 = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

for(let i = 0; i < alphabet2.length; i++){
    if(nb2 == alphabet2[i]){
        console.log('Letter input: ' +nb2 + '  Position: ' + (i+1))
    }
    else{
        console.log('Retry')
    }
}
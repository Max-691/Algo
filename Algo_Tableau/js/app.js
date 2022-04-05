// //  A. Int of array ==> Minimum
export const min = (entry) =>{

    let tmp = entry[0];
    for (let i = 0; i < entry.length; i++) {
        if(entry[i] < tmp){
            tmp = entry[i];
        }
    }
    return tmp;
}


// B. Array (of int) ==> Medium
export const medium = (entry) =>{
        let tmp =0;
        for (let i = 0; i < entry.length; i++) {
        tmp +=entry[i];
    }
    tmp /= entry.length;
    return tmp;
}

//  C. Array (de int) ==> Without Strings
export const string = (entry) =>{
    let transform_array = [];
    for (let index = 0; index < entry.length; index++) {
        if (parseInt(entry[index])) {
            transform_array.push(parseInt(entry[index]));
        } 
    }
}

// D. Array (of int) ==> return 2 arrays: 1 pair array and 1 impair array
export const pairFilter = (entry) =>{
    let pair_array = [];
    let impair_array = [];
    for (let i = 0; i < entry.length; i++) {
        if (entry % 2 === 0) {
            pair_array.push(entry[i])
        }
        else if(entry % 2 !== 0){
            impair_array.push(entry[i])
        }
    }
}

// E. 2 Arrays (of int) ==> 1 array of int that are in 2 arrays
export const concordance = (a, b) =>{
    //let transform = entry.reduce((e, f) => console.log(e === f))
    let tmp = [];
    for (let y = 0; y < a.length; y++){

        for (let z = 0; z < b.length; z++){

            if (a[y] === b[z]){
                tmp.push(a[y]);
            }
        }
    }
    return tmp;
}
concordance([1, 2, 3]), [2, 5, 6]
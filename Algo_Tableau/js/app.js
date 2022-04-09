// A. Int of array ==> Minimum
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

// C. Array (de int) ==> Without Strings
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
        if (entry[i] % 2 === 0) {
            pair_array.push(entry[i])
        }
        else if(entry[i] % 2 !== 0){
            impair_array.push(entry[i])
        }
    }
}

// E. 2 Arrays (of int) ==> 1 array of int that are in 2 arrays
export const concordance = (a, b) =>{
    let tmp = [];
    for (let i = 0; i < a.length; i++){

        // for (let i2 = 0; i2 < b.length; i2++){

        //     if (a[i] === b[i2]){
        //         tmp.push(a[i]);
        //     }
        // }
        if(b.includes(a[i]) && !tmp.includes(a[i])){
            tmp.push(a[i]);
        }
    }
}
        

// F. Array (of int) ==> return 1 array without duplicates

export const duplicates = (entry) =>{
    let tmp = [];
    for (let i = 0; i < entry.length; i++) {
        if (!tmp.includes(entry[i])) {
            tmp.push(entry[i])
        }
    }
}

// G. Array (of int) ==> 1 objet nombre occurences
export const occurences = (entry) =>{
    
}
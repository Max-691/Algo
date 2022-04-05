// Sort minimum1
export const min = (entry) =>{

    let tmp = entry[0];
    for (let i = 0; i < entry.length; i++) {
        if(entry[i] < tmp){
            tmp = entry[i];
        }
    }
    return tmp;
}

// Sort medium

export const medium = (entry) =>{
        let tmp =0;
        for (let i = 0; i < entry.length; i++) {
        tmp +=entry[i];
    }
    tmp /= entry.length;
    return tmp;
}

export const string = (entry) =>{
    let transform_array = [];
    for (let index = 0; index < entry.length; index++) {
        if (parseInt(entry[index])) {
            transform_array.push(parseInt(entry[index]));
        } 
    }
}

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
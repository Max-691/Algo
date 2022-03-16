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

}
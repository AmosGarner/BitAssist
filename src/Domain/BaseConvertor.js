
export function dec2Bin(value){
    return parseInt(value, 10).toString(2);
}

export function  dec2Hex(value){
    let hexValue = parseInt(value, 10).toString(16).toUpperCase();
    if(hexValue.length <=1){
        return "0"+hexValue;
    }
    return hexValue
}
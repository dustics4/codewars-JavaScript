function replaceAlphabet(str){
    //convert text to uppercase

    let upperText = str.toUpperCase();

    //map over each letter converting it to charCode
    let arr = upperText.split("").map(let => let.charCodeAt());

    //create a new array with the correct numerical values
    const newArr = arr.filter(num => {
        if(num > 64 && num < 91){
            return num
        }
    })
    //create a third array where we will store the numbers. For each charcode num we -64 to provide the number of each letter correct
    const updatedNumsArr = newArr.map(num => num - 64);

    return updatedNumsArr.join(" ");
}

replaceAlphabet("The sunset sets at twelve o' clock.")
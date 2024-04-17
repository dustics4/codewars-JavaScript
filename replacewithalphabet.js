function replaceAlphabet(str){
    let lowerText = str.toUpperCase();

    let arr = lowerText.split("").map(let => let.charCodeAt());

    const newArr = arr.filter(num => {
        if(num > 64 && num < 91){
            return num
        }
    })

    const updatedNumsArr = newArr.map(num => num - 64);

    return updatedNumsArr.join(" ");
}

replaceAlphabet("The sunset sets at twelve o' clock.")
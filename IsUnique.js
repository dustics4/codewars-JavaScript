function isUnique(string){
    //create a algorithmn to determine if a string has all unique characters. What if you cannot use additional data structures?

    //loop through the string
    //check if string i == string i
    // return true
    //else false
    for(let i = 0; i < string.length;i++){
        for(let j = i + 1; j < string.length ; i++){
            if(string[i] === string[j]) {
                return false
            }else{
                return true;
            }
        }
        
    }
}

function isUniqueASCII(string){

    let chArray = string.split('');

    chArray.sort();
    for(let i = 0; i < chArray.length; i++){
        if(chArray[i] != chArray[i + 1]){
            continue;
        }else{
            return false;
        }
    }

    return true;
}

isUniqueASCII("sek");
isUnique("sek");


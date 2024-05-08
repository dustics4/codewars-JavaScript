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

isUnique("sek");


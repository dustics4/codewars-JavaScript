function permutatePalindromCheck(str){
    //create a dictionary or map to hold character requencies
    let map = new Map();

    //loop through each character
    //for each character in string
    for(const char in str.toLowerCase()){
        //if the character is an alphabetic character
        if(char >= 'a' && char <= 'z'){
            //increment character count in dictionary
            map.set(char, (map.get(char) || 0) + 1);
        }
    }

    //create a variable to track odd count, initialize to 0
    let oddCount = 0;
    //for each value in the dictionary
    for(const count  in map.values()){
        //if the value is odd, increment the odd character count
        if(value % 2 !== 0) oddCount++;
        //if the odd character count is greater than 1, return false
        if(oddCount > 1) console.log(false) ;
    }
    //otherwise we return true
    console.log(true) 
}

permutatePalindromCheck("Tact Coa");
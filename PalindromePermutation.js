function permutatePalindromCheck(str){

    let map = new Map();

    for(const char in str.toLowerCase()){
        if(char >= 'a' && char <= 'z'){
            map.set(char, (map.get(char) || 0) + 1);
        }
    }

    let oddCount = 0;
    for(const count  in map.values()){
        if(value % 2 !== 0) oddCount++;
        if(oddCount > 1) console.log(false) ;
    }
    console.log(true) 
}

permutatePalindromCheck("Tact Coa");
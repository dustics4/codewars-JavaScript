function permutation(strA , strB){

    if(strA.length !== strB.length){
        return false
    }else{
        return sort(strA) === sort(strB);
    }
}

function sort(str){
    return str.split("").sort().toString();
}

permutation("abc", "cba");
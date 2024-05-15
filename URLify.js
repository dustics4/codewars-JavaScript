function urlIfy(str){
    
    let char = "%20";
    let outputStr = '';
    //loop through string
    for(let i = 0; i < str.length; i++){
        //strin index is equal to empty space
        if(str[i] === " "){
            //if yes, replace it with the characters sequence
            outputStr += char;
        }else{
            //if not, append hte charcaters in to the output string
            outputStr += str[i];
        }
    }
    console.log(outputStr);
}

urlIfy("This is John");
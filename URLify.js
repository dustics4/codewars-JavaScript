function urlIfy(str){
    
    let char = "%20";
    let outputStr = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] === " "){
            outputStr += char;
        }else{
            outputStr += str[i];
        }
    }
    console.log(outputStr);
}

urlIfy("This is John");
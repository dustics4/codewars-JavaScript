function duplicateEndcode(word){
    // we convert a string to a NEW string
    //if character appears once in string it converts into "("
    //if character appears more than once it is converted into ")";
    //ignore capitalization
    let  text = word.toLowerCase().split("");

    let outputString = [];

    //for each element in text. (character)
    for(i in text){
        //push it to the new string
        outputString.push(
            //not case sensitive, split text character and check length - 1, as there is always 1 empty array on the end
            // this checks if its greater or equal to 1 it changes characters accordingly
            word.toLowerCase().split(text[i]).length - 1 <= 1 ? "(" : ")"
        );
    }

    console.log(outputString.join(""));

}


duplicateEndcode("recede");
function spinWords(str){
  //TODO Have fun :)
  //split the string
  let words = str.split(' ');
        console.log(words);
      //function to reverse words
        const reverseWords = (string) => string.split('').reverse().join('');
        
        //for every character in the array
        for(let i = 0; i < words.length; i++){
          //if the word is 5 or more 
            if(words[i].length >= 5) {
              //reverse the words
                const word = words[i];
                words[i] = reverseWords(word);

            }

        }
  //join the string
        return words.join(' ');
    
}

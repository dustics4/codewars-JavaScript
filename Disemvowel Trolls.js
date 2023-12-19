function disemvowel(str) {
  var newStr = "",
        i;

    for (i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) continue;
        newStr += str[i];
    }
    return newStr;
}

//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

function friend(friends){
  //your code here
  
  let arrHolder = [];
  const array = friends.splice("");
  
  for(let i = 0; i < array.length; i++){
    let strHolder = array[i].toString();
    if(strHolder.length === 4){
      arrHolder.push(strHolder)
    }
  }
  return arrHolder
  
}

friend(["Ryan", "Kieran", "Mark"])

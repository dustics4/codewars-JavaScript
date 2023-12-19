// return masked string
function maskify(cc) {
   let masked = '';
       let str = cc.substr(-4);
        
       for(let i = 0; i < cc.length - 4; i++){
        masked += '#'
        
       }
    
  return masked + str;
}

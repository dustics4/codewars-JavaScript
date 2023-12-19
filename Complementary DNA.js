function DNAStrand(dna){
  //your code here
  
  const dnaCompliments = {
      
    "C" : "G",
    "G" : "C",
    "A" : "T",
    "T" : "A",
    
  }
  
  return dna.split('').map( elem => dnaCompliments[elem]).join('');
  
}

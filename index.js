function indexOfArrySequence(searchSequence, source){
  for(var i = 0; i < source.length; i++){
    if(searchSequence[0] === source[i]){
      for(var x = 0; x < searchSequence.length; x++){
        if(searchSequence[x] === source[i+x]){
          if(x == (searchSequence.length- 1)){
            return i 
          }else{
            continue
          }
        } else {
          break
        }
      }
    }else {
    }
  }
  return -1 
}

module.exports = indexOfArrySequence

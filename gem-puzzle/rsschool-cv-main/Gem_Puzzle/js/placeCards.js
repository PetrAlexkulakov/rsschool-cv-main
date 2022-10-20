function placeCards(amount=16){
    let Numbers16 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

    do{
        Numbers16 = _shuffle(Numbers16)
    }while( _try(Numbers16)==false)
    
    return Numbers16
}

function _shuffle(Numbers){
    var currentIndex = Numbers.length, temporaryValue, randomIndex

  while (currentIndex != 0) {

    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1;

    temporaryValue = Numbers[currentIndex];
    Numbers[currentIndex] = Numbers[randomIndex]
    Numbers[randomIndex] = temporaryValue
  }

  return Numbers;
}

function _try(Numbers){
    let N=0
    let e= Numbers.indexOf(Numbers.length) 
    let k=Numbers.length**(1/2)

    do{
        k--
    }while(e<k*Numbers.length**(1/2))
    e=k+1

    Numbers.forEach((number,index)=>{
        let count=0

        for(let i=index+1; i<Numbers.length;i++){
            if(Numbers[i] < number) count++
        }
        N+=count+e
    })

    if(N%2) return true
    return false
}

export {placeCards};
// console.log(placeCards())
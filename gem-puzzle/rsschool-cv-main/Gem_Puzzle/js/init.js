import {placeCards} from './placeCards';
import {cardShift} from './game';
import {isWin, gameStop} from './isWin';
import {playingPlace,endGame} from './createAll';

let ourNumbers= placeCards();

function replaceCard(ourNumbers){

ourNumbers.forEach((number)=>{
    let numberElement = document.createElement('div')
    if(number != ourNumbers.length){
        numberElement.innerHTML = number
        numberElement.className = `card ${number}`
    }else{
        //numberElement.innerHTML = number
        numberElement.className = `card card_empty`
    }
    playingPlace.append(numberElement)
})
}

replaceCard(ourNumbers)

playingPlace.addEventListener('click',function (event){

    if(!gameStop){
        cardShift(event.target, ourNumbers);
        playingPlace.replaceChildren();
        replaceCard(ourNumbers);
        isWin(ourNumbers);
    }

})

endGame.addEventListener('click',function(){
    location.reload()
})
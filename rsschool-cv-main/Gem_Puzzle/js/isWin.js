import { movesCount, timer,endGame, buttonStop } from "./createAll";
import { countOfMoves,sec,min,timerStart } from "./moves_n_timer";

export let gameStop = false

buttonStop.addEventListener('click',function(){
    gameStop = !gameStop
    if(!gameStop) timerStart()
})

export function isWin(ourNumbers){

    let done = true;
    
    ourNumbers.forEach((number,index)=>{
        if(index!=0 && number - ourNumbers[index-1] !== 1) done = false
    })

    if(done){

        gameStop=true
        endGame.style.display = 'block';
        endGame.innerHTML = `Hurrah! You have solved the puzzle for ${min}:${sec}  and ${countOfMoves} moves!`

    }
}
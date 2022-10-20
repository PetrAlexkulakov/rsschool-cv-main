import { movesCount, timer } from "./createAll";
import { gameStop } from "./isWin";

export let countOfMoves=0;
export var sec = 0;
export var min = 0;



export function increaseCount(){
    countOfMoves++
    movesCount.innerHTML= 'Moves:'+countOfMoves;
}

export function timerStart(){
    if(!gameStop) setTimeout(_place,1000);
}

function _tick(){
    sec++;
    if (sec >= 60) {
        sec = 0;
        min++;
    }
}

function _place(){
    _tick()
    timer.innerHTML= 'Time' 
    + (min > 9 ? min : "0" + min)
    + ":" + (sec > 9 ? sec : "0" + sec);
    timerStart()
}
timerStart()
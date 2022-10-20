import {increaseCount} from './moves_n_timer';
import { buttonSound,buttonStop } from './createAll';


let canAudio=true
buttonSound.addEventListener('click',function(){
    canAudio= !canAudio
})


export function cardShift(target, ourNumbers){
    if(!target.classList.contains('card')) {
        return false;
    }
    
    let number = +target.innerHTML

    let audioStone= new Audio()
    audioStone.src='audio/stone.mp3'

    if(ourNumbers.indexOf(number) != ourNumbers.length-1 &&
    ourNumbers[ourNumbers.indexOf(number)+1]==ourNumbers.length  &&
    (((ourNumbers.indexOf(number)+1) % (ourNumbers.length**(1/2))) != 0)){

        ourNumbers[ourNumbers.indexOf(number)+1]=ourNumbers[ourNumbers.indexOf(number)]
        ourNumbers[ourNumbers.indexOf(number)] = ourNumbers.length
        increaseCount()
        if(canAudio) audioStone.autoplay = true;
    }
    else if(ourNumbers.indexOf(number) != 0 &&
    ourNumbers[ourNumbers.indexOf(number)-1]==ourNumbers.length &&
    (ourNumbers.indexOf(number) % (ourNumbers.length**(1/2))) != 0){
        
        ourNumbers[ourNumbers.indexOf(number)-1]=ourNumbers[ourNumbers.indexOf(number)]
        ourNumbers[ourNumbers.indexOf(number)+1] = ourNumbers.length
        increaseCount()
        if(canAudio) audioStone.autoplay = true;
    }
    else if(ourNumbers.indexOf(number)+ourNumbers.length**(1/2) <= ourNumbers.length-1 &&
    ourNumbers[ourNumbers.indexOf(number) + ourNumbers.length**(1/2)]==ourNumbers.length){
        
        ourNumbers[ourNumbers.indexOf(number)+ourNumbers.length**(1/2)]=ourNumbers[ourNumbers.indexOf(number)]
        ourNumbers[ourNumbers.indexOf(number)] = ourNumbers.length
        increaseCount()
        if(canAudio) audioStone.autoplay = true;
    }
    else if(ourNumbers.indexOf(number)-ourNumbers.length**(1/2) >= 0 &&
    ourNumbers[ourNumbers.indexOf(number) - ourNumbers.length**(1/2)]==ourNumbers.length){
        
        ourNumbers[ourNumbers.indexOf(number)-ourNumbers.length**(1/2)]=ourNumbers[ourNumbers.indexOf(number)]
        ourNumbers[ourNumbers.indexOf(number)+ourNumbers.length**(1/2)] = ourNumbers.length
        increaseCount()
        if(canAudio) audioStone.autoplay = true;
    }
}

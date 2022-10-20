export let htmlBodyWrapper =  document.createElement('div');
htmlBodyWrapper.className='wrapper wrapper__body';
export let playingField= document.createElement('div');
playingField.className="wrapper playing-field";
export let buttonPlace= document.createElement('div');
buttonPlace.className="wrapper button-place";
export let timerPlace=document.createElement('div');
timerPlace.className="wrapper timer-place";
export let playingPlace= document.createElement('div');
playingPlace.className='wrapper playing-place'
export let nowSize= document.createElement('div');
nowSize.className='wrapper now_size';
export let otherSize= document.createElement('div');
otherSize.className='wrapper other_size';
export let movesCount=document.createElement('div');
movesCount.className='count-moves';
movesCount.innerHTML='Moves: 0';
export let timer=document.createElement('div');
timer.className='timer';
timer.innerHTML='Time:00:00';
export let endGame= document.createElement('div');
endGame.className='end-game-display';
export let buttonShuffle= document.createElement('div');
buttonShuffle.className='button button-shuffle'
buttonShuffle.textContent='Shuffle and start'
export let buttonStop= document.createElement('div');
buttonStop.className='button button-stop'
buttonStop.textContent='Stop'
export let buttonSave= document.createElement('div');
buttonSave.className='button button-save'
buttonSave.textContent='Save'
export let buttonResult= document.createElement('div');
buttonResult.className='button button-result'
buttonResult.textContent='Results'
export let buttonSound= document.createElement('div');
buttonSound.className='button button-Sound'
buttonSound.textContent='Sound'


document.body.append(htmlBodyWrapper);
document.body.append(endGame);
htmlBodyWrapper.append(playingField);
playingField.append(buttonPlace);
playingField.append(timerPlace);
playingField.append(playingPlace);
playingField.append(nowSize);
playingField.append(otherSize);
timerPlace.append(movesCount);
timerPlace.append(timer);
buttonPlace.append(buttonShuffle);
buttonPlace.append(buttonSave);
buttonPlace.append(buttonStop);
buttonPlace.append(buttonResult);
buttonPlace.append(buttonSound);
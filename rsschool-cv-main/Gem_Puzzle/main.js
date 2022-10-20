/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Gem_Puzzle/js/createAll.js":
/*!************************************!*\
  !*** ./Gem_Puzzle/js/createAll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonPlace": () => (/* binding */ buttonPlace),
/* harmony export */   "buttonResult": () => (/* binding */ buttonResult),
/* harmony export */   "buttonSave": () => (/* binding */ buttonSave),
/* harmony export */   "buttonShuffle": () => (/* binding */ buttonShuffle),
/* harmony export */   "buttonSound": () => (/* binding */ buttonSound),
/* harmony export */   "buttonStop": () => (/* binding */ buttonStop),
/* harmony export */   "endGame": () => (/* binding */ endGame),
/* harmony export */   "htmlBodyWrapper": () => (/* binding */ htmlBodyWrapper),
/* harmony export */   "movesCount": () => (/* binding */ movesCount),
/* harmony export */   "nowSize": () => (/* binding */ nowSize),
/* harmony export */   "otherSize": () => (/* binding */ otherSize),
/* harmony export */   "playingField": () => (/* binding */ playingField),
/* harmony export */   "playingPlace": () => (/* binding */ playingPlace),
/* harmony export */   "timer": () => (/* binding */ timer),
/* harmony export */   "timerPlace": () => (/* binding */ timerPlace)
/* harmony export */ });
let htmlBodyWrapper =  document.createElement('div');
htmlBodyWrapper.className='wrapper wrapper__body';
let playingField= document.createElement('div');
playingField.className="wrapper playing-field";
let buttonPlace= document.createElement('div');
buttonPlace.className="wrapper button-place";
let timerPlace=document.createElement('div');
timerPlace.className="wrapper timer-place";
let playingPlace= document.createElement('div');
playingPlace.className='wrapper playing-place'
let nowSize= document.createElement('div');
nowSize.className='wrapper now_size';
let otherSize= document.createElement('div');
otherSize.className='wrapper other_size';
let movesCount=document.createElement('div');
movesCount.className='count-moves';
movesCount.innerHTML='Moves: 0';
let timer=document.createElement('div');
timer.className='timer';
timer.innerHTML='Time:00:00';
let endGame= document.createElement('div');
endGame.className='end-game-display';
let buttonShuffle= document.createElement('div');
buttonShuffle.className='button button-shuffle'
buttonShuffle.textContent='Shuffle and start'
let buttonStop= document.createElement('div');
buttonStop.className='button button-stop'
buttonStop.textContent='Stop'
let buttonSave= document.createElement('div');
buttonSave.className='button button-save'
buttonSave.textContent='Save'
let buttonResult= document.createElement('div');
buttonResult.className='button button-result'
buttonResult.textContent='Results'
let buttonSound= document.createElement('div');
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

/***/ }),

/***/ "./Gem_Puzzle/js/game.js":
/*!*******************************!*\
  !*** ./Gem_Puzzle/js/game.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardShift": () => (/* binding */ cardShift)
/* harmony export */ });
/* harmony import */ var _moves_n_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moves_n_timer */ "./Gem_Puzzle/js/moves_n_timer.js");
/* harmony import */ var _createAll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createAll */ "./Gem_Puzzle/js/createAll.js");




let canAudio=true
_createAll__WEBPACK_IMPORTED_MODULE_1__.buttonSound.addEventListener('click',function(){
    canAudio= !canAudio
})


function cardShift(target, ourNumbers){
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
        ;(0,_moves_n_timer__WEBPACK_IMPORTED_MODULE_0__.increaseCount)()
        if(canAudio) audioStone.autoplay = true;
    }
    else if(ourNumbers.indexOf(number) != 0 &&
    ourNumbers[ourNumbers.indexOf(number)-1]==ourNumbers.length &&
    (ourNumbers.indexOf(number) % (ourNumbers.length**(1/2))) != 0){
        
        ourNumbers[ourNumbers.indexOf(number)-1]=ourNumbers[ourNumbers.indexOf(number)]
        ourNumbers[ourNumbers.indexOf(number)+1] = ourNumbers.length
        ;(0,_moves_n_timer__WEBPACK_IMPORTED_MODULE_0__.increaseCount)()
        if(canAudio) audioStone.autoplay = true;
    }
    else if(ourNumbers.indexOf(number)+ourNumbers.length**(1/2) <= ourNumbers.length-1 &&
    ourNumbers[ourNumbers.indexOf(number) + ourNumbers.length**(1/2)]==ourNumbers.length){
        
        ourNumbers[ourNumbers.indexOf(number)+ourNumbers.length**(1/2)]=ourNumbers[ourNumbers.indexOf(number)]
        ourNumbers[ourNumbers.indexOf(number)] = ourNumbers.length
        ;(0,_moves_n_timer__WEBPACK_IMPORTED_MODULE_0__.increaseCount)()
        if(canAudio) audioStone.autoplay = true;
    }
    else if(ourNumbers.indexOf(number)-ourNumbers.length**(1/2) >= 0 &&
    ourNumbers[ourNumbers.indexOf(number) - ourNumbers.length**(1/2)]==ourNumbers.length){
        
        ourNumbers[ourNumbers.indexOf(number)-ourNumbers.length**(1/2)]=ourNumbers[ourNumbers.indexOf(number)]
        ourNumbers[ourNumbers.indexOf(number)+ourNumbers.length**(1/2)] = ourNumbers.length
        ;(0,_moves_n_timer__WEBPACK_IMPORTED_MODULE_0__.increaseCount)()
        if(canAudio) audioStone.autoplay = true;
    }
}


/***/ }),

/***/ "./Gem_Puzzle/js/isWin.js":
/*!********************************!*\
  !*** ./Gem_Puzzle/js/isWin.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "gameStop": () => (/* binding */ gameStop),
/* harmony export */   "isWin": () => (/* binding */ isWin)
/* harmony export */ });
/* harmony import */ var _createAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAll */ "./Gem_Puzzle/js/createAll.js");
/* harmony import */ var _moves_n_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moves_n_timer */ "./Gem_Puzzle/js/moves_n_timer.js");



let gameStop = false

_createAll__WEBPACK_IMPORTED_MODULE_0__.buttonStop.addEventListener('click',function(){
    gameStop = !gameStop
    if(!gameStop) (0,_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.timerStart)()
})

function isWin(ourNumbers){

    let done = true;
    
    ourNumbers.forEach((number,index)=>{
        if(index!=0 && number - ourNumbers[index-1] !== 1) done = false
    })

    if(done){

        gameStop=true
        _createAll__WEBPACK_IMPORTED_MODULE_0__.endGame.style.display = 'block';
        _createAll__WEBPACK_IMPORTED_MODULE_0__.endGame.innerHTML = `Hurrah! You have solved the puzzle for ${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.min}:${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.sec}  and ${_moves_n_timer__WEBPACK_IMPORTED_MODULE_1__.countOfMoves} moves!`

    }
}

/***/ }),

/***/ "./Gem_Puzzle/js/moves_n_timer.js":
/*!****************************************!*\
  !*** ./Gem_Puzzle/js/moves_n_timer.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countOfMoves": () => (/* binding */ countOfMoves),
/* harmony export */   "increaseCount": () => (/* binding */ increaseCount),
/* harmony export */   "min": () => (/* binding */ min),
/* harmony export */   "sec": () => (/* binding */ sec),
/* harmony export */   "timerStart": () => (/* binding */ timerStart)
/* harmony export */ });
/* harmony import */ var _createAll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createAll */ "./Gem_Puzzle/js/createAll.js");
/* harmony import */ var _isWin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./isWin */ "./Gem_Puzzle/js/isWin.js");



let countOfMoves=0;
var sec = 0;
var min = 0;



function increaseCount(){
    countOfMoves++
    _createAll__WEBPACK_IMPORTED_MODULE_0__.movesCount.innerHTML= 'Moves:'+countOfMoves;
}

function timerStart(){
    if(!_isWin__WEBPACK_IMPORTED_MODULE_1__.gameStop) setTimeout(_place,1000);
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
    _createAll__WEBPACK_IMPORTED_MODULE_0__.timer.innerHTML= 'Time' 
    + (min > 9 ? min : "0" + min)
    + ":" + (sec > 9 ? sec : "0" + sec);
    timerStart()
}
timerStart()

/***/ }),

/***/ "./Gem_Puzzle/js/placeCards.js":
/*!*************************************!*\
  !*** ./Gem_Puzzle/js/placeCards.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "placeCards": () => (/* binding */ placeCards)
/* harmony export */ });
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


// console.log(placeCards())

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************************!*\
  !*** ./Gem_Puzzle/js/init.js ***!
  \*******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _placeCards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./placeCards */ "./Gem_Puzzle/js/placeCards.js");
/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game */ "./Gem_Puzzle/js/game.js");
/* harmony import */ var _isWin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isWin */ "./Gem_Puzzle/js/isWin.js");
/* harmony import */ var _createAll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./createAll */ "./Gem_Puzzle/js/createAll.js");





let ourNumbers= (0,_placeCards__WEBPACK_IMPORTED_MODULE_0__.placeCards)();

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
    _createAll__WEBPACK_IMPORTED_MODULE_3__.playingPlace.append(numberElement)
})
}

replaceCard(ourNumbers)

_createAll__WEBPACK_IMPORTED_MODULE_3__.playingPlace.addEventListener('click',function (event){

    if(!_isWin__WEBPACK_IMPORTED_MODULE_2__.gameStop){
        (0,_game__WEBPACK_IMPORTED_MODULE_1__.cardShift)(event.target, ourNumbers);
        _createAll__WEBPACK_IMPORTED_MODULE_3__.playingPlace.replaceChildren();
        replaceCard(ourNumbers);
        (0,_isWin__WEBPACK_IMPORTED_MODULE_2__.isWin)(ourNumbers);
    }

})

_createAll__WEBPACK_IMPORTED_MODULE_3__.endGame.addEventListener('click',function(){
    location.reload()
})
})();

/******/ })()
;
//# sourceMappingURL=main.js.map
const arrayCartas = [];
let arrayback = [];
let previousCard = null;
let turnedCards = [];
let numCards = 0;
let rightCards  = 0;
let numMoves = 0;
let interval = false;
let card1, card2;
let hasFlippedCard = false;
const arraybackface = ['midia/bobrossparrot.gif','midia/bobrossparrot.gif','midia/explodyparrot.gif','midia/explodyparrot.gif','midia/fiestaparrot.gif','midia/fiestaparrot.gif',
'midia/metalparrot.gif','midia/metalparrot.gif','midia/revertitparrot.gif','midia/revertitparrot.gif','midia/tripletsparrot.gif','midia/tripletsparrot.gif','midia/unicornparrot.gif',
 'midia/unicornparrot.gif' ];

function cardnumber() {
    numberOfCards = Number(prompt('Com quantas cartas você quer jogar? 4-14'));
    if (3 < numberOfCards && numberOfCards < 15 && numberOfCards % 2 === 0) {          
         } else {
             cardnumber();
         }    
};
cardnumber();


function backCards(numberOfCards) {
   arrayback = arraybackface.slice(0, numberOfCards)   

};

function comparador() { 
	return Math.random() - 0.5; 
}

function randomizador() {
    arrayback.sort(comparador);
}

backCards(numberOfCards);
randomizador();

const container = document.querySelector('.container');
// Create the specified number of divs using a loop
for (let i = 0; i < numberOfCards; i++) {
    if (3 < numberOfCards && numberOfCards < 15 && numberOfCards % 2 === 0) {   
      let div = document.createElement("div");
        div.classList.add('card');
        
        let front = document.createElement('img');
        let back = document.createElement('img');
        //front.classList.add('front')
        front.classList.add('face');
        front.classList.add('front-face');
        back.setAttribute("src" , 'midia/back.png');
        back.classList.add('back-face');
        back.classList.add('face');
        //back.classList.add('back');
        front.setAttribute("src" , arrayback[i]);
        front.innerHTML = arrayback[i];
        div.setAttribute('onclick', 'flipCard(this)');
        console.log(div) ;  
        div.setAttribute('data-framework', arrayback[i]);
        container.appendChild(div);
        div.appendChild(front);
        div.appendChild(back);
        // console.log(front)
        // console.log(back)
        // <div>card
        //     <div> front </div>
        //     <div> back </div> 
        // </div>    
        // console.log(div);
        // console.log(front.parentNode);
        arrayCartas.push(back);
        // console.log(arrayCartas);
           
} 
}


function flipCard(card) {
    numMoves++;
    card.classList.add('flip');

    if(!hasFlippedCard) {
      hasFlippedCard = true;
      card1 = card;
    } else {
      hasFlippedCard = false;
      card2 = card;
    
    console.log(card1, card2)
    
    if (card1.dataset.framework === card2.dataset.framework) {
      card1.removeAttribute('onclick');
      card2.removeAttribute('onclick');
    } else {
      setTimeout(() => {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
      }, 2000 );
    }
    }

//     card.classList.add('selected')
//     const front = card.querySelector('.front-face');
//     console.log(front)
//     front.classList.add('front');

//     const back = card.querySelector('.back-face');
//     console.log(back)
//     back.classList.add('back');
//     card.removeAttribute("onclick")
// //    verifyPair();

}

// function verifyPair() {
//     turnedCards = document.querySelectorAll('.selected');
//     if (turnedCards.length === 2){
//         card1 = turnedCards[0];
//         card2 = turnedCards[1];
//         if (card1.id === card2.id) {
//             card1.classList.remove('selected');
//             card2.classList.remove('selected');
//             card1.classList.add('par');
//             card2.classList.add('par');
//         }


//     }
    

//     rightCards += 2;

//     if (rightCards === numCards) {
//       endGame();
//     }
//   } else{
//     setTimeout ( returnCards , 2000 ); 
//   }
// } 
// }

function returnCards(){
for (let i=0; i < turnedCards.length; i++){
  if ( turnedCards[i].classList.contains("review") ){
    turnedCards[i].classList.remove("review");
    turnedCards[i].classList.remove("front");
    turnedCards[i].classList.add ("back");

    turnedCards[i].setAttribute("data-identifier","back-face");
  }
}
}






function endGame(){
clearInterval(interval);
alert (`Você ganhou em ${numMoves} jogadas e em ${counter.innerHTML} segundos!`);

let restart = prompt("Deseja reiniciar a partida? (Sim ou Não)");

if (restart.toUpperCase() === "SIM" || restart.toUpperCase() === "S"){
  restartGame();
}
}









// const arrayCardsFront = document.querySelectorAll('.front-face')
// console.log(arrayCardsFront)
// arrayCardsFront.forEach((front) => {
//     front.addEventListener('click', () => {
//         if (!front.classList.contains('.flip')) {
//             front.classList.add(".flip")
//             console.log(arrayCardsFront)
//         }

//     })
// })
// const arrayCardsBack = document.querySelectorAll('.back-face')
// console.log(arrayCardsBack)
// arrayCardsBack.forEach((back) => {
//     back.addEventListener('click', () => {
//         if (!back.classList.contains('.backflip')) {
//             back.classList.add(".flip")
//             console.log(arrayCardsBack)
//         }

//     })
// })

// function flipcard(card) {
//     card.classList.add('flip');
// }
// const cardclick = document.querySelectorAll('.card')

// function flipcard(){
//     alert('oi')
// }

// cardclick.onclick = flipcard;
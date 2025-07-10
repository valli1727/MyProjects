const cardarray = [
    {
        name:'fries',
        img : 'fries.png'
    },
    {
        name:'cheeseburger',
        img : 'cheeseburger.png'
    },
    {
        name:'hotdog',
        img : 'hotdog.png'
    },
    {
        name:'ice-cream',
        img : 'ice-cream.png'
    },
    {
        name:'pizza',
        img : 'pizza.png'
    },
    {
        name:'milkshake',
        img : 'milkshake.png'
    },
    {
        name:'fries',
        img : 'fries.png'
    },
    {
        name:'cheeseburger',
        img : 'cheeseburger.png'
    },
    {
        name:'hotdog',
        img : 'hotdog.png'
    },
    {
        name:'ice-cream',
        img : 'ice-cream.png'
    },
    {
        name:'pizza',
        img : 'pizza.png'
    },
    {
        name:'milkshake',
        img : 'milkshake.png'
    }
]

cardarray.sort(()=> 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds=[]
const cardsWon = []

function createBoard()
{
    for(let i=0;i<cardarray.length;i++)
    {
        const card = document.createElement('img')
        card.setAttribute('src','blank.png')
        card.setAttribute('data-id',i)
        gridDisplay.appendChild(card)
        card.addEventListener('click',flipcard)
    }
}
createBoard()
function checkMatch()
{
    const cards = document.querySelectorAll('img')

    if(cardsChosen[0]==cardsChosen[1])
    {
        cards[cardsChosenIds[0]].setAttribute('src','white.png')
        cards[cardsChosenIds[1]].setAttribute('src','white.png')
        cards[cardsChosenIds[0]].removeEventListener('click',flipcard)
        cards[cardsChosenIds[1]].removeEventListener('click',flipcard)
        cardsWon.push(cardsChosen)
    }
    else{
        cards[cardsChosenIds[0]].setAttribute('src','blank.png')
        cards[cardsChosenIds[1]].setAttribute('src','blank.png')
    }
    resultDisplay.textContent = cardsWon.length
    cardsChosen=[]
    cardsChosenIds=[]

    if(cardsWon.length == cardarray.length/2)
    {
        resultDisplay.textContent = "Congratulations! you have found them all"
    }
}

function flipcard()
{
    const cardId = this.getAttribute('data-id')
    cardsChosen.push(cardarray[cardId].name)
    cardsChosenIds.push(cardId)
    this.setAttribute('src',cardarray[cardId].img)
    if(cardsChosen.length===2)
    {
        setTimeout(checkMatch,500)
    }
}
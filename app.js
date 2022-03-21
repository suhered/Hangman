let hangman1
const startGame=async()=>{
    const word= await createPuzzle("2")
    hangman1=new Hangman(word,5)
    render()
}
const render=async()=>{
    h2.textContent='' //hangman1.puzzle
    h3.textContent=hangman1.statusMessage
    h5.textContent=hangman1.status
    const x=hangman1.puzzle.split('')
    x.forEach(element => {
        const span = document.createElement("span")
        span.textContent=element
        h2.appendChild(span)
    });
}

startGame()

const h2=document.createElement("h2")
const h3=document.createElement("h3")
const h5=document.createElement("h5")

document.querySelector("#puzzle-p").appendChild(h2)
document.querySelector("#guess-p").appendChild(h3)
document.querySelector("#status-p").appendChild(h5)

document.querySelector("#reset-button").addEventListener('click',startGame)

window.addEventListener('keypress',(e)=>{
    const guess=String.fromCharCode(e.charCode)
    hangman1.makeGuess(guess)
    render()
})



// getCountry("US").then((message)=>{
//     console.log(message);
//     })

// getLocation().then((data)=>{
//     return getCountry(data.country)
// }).then((country)=>{
//     console.log(country);
// }).catch((e)=>{
//     console.log(e);
// })

// getLocation().then((data)=>{
//     console.log(data);
// }).catch((e)=>{
//     console.log(e);
// })
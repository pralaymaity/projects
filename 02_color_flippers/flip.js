colors = ['Green', 'Red','Yellow','Blue','Orange','Cyan']


let colorflip = document.getElementById("h1")

    	colorflip.addEventListener('click',function constant() {
            document.body.style.backgroundColor = 'white'
        })

// let simple = document.getElementById("h2")

//         simple.addEventListener('click',function constant() {
//             document.body.style.backgroundColor = 'white'
//         })

// let hex = document.getElementById("h3")
//         hex.addEventListener('click',function constant() {
//             document.body.style.backgroundColor = 'white'
//         })



let flip = document.getElementById("button")

let color = document.querySelector(".span1")  // The querySelector() method returns the first element that matches a CSS selector

    flip.addEventListener('click',function flipper() {

        console.log(flip);
        let flipper = randomNumber();
        console.log(flipper); 

        document.body.style.backgroundColor = colors[flipper] // for randomly choose colors..

        color.textContent = colors[flipper]
    })

function randomNumber() {
    return Math.floor(Math.random()*colors.length)
}
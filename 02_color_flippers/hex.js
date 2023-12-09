colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

let hexcolor = document.getElementById("button")
let hex = document.querySelector(".span1")

hexcolor.addEventListener("click",function name() {
    let hexco = "#"
    for(let i = 0; i < 6; i++){
        hexco = hexco + colors[getrandomNumber()]
    }

    hex.textContent = hexco
    document.body.style.backgroundColor = hexco
    
})


function getrandomNumber(){
    return Math.floor(Math.random()*colors.length)
}

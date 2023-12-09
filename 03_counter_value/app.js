
let count = 0;


let increase = document.getElementById("increase")
let reset = document.getElementById("reset")
let decrease = document.getElementById("decrease")

let span = document.getElementById("number")


increase.addEventListener('click',function(){   // generate a event
    count++;                                           // decrease the value
    span.innerHTML = count
    console.log(span);

    if(count >= 1){
        span.style.color = "green"
    }
    else if (count == 0) {
        span.style.color = "black"
    }
})

decrease.addEventListener('click',function(){  // generate a event
    count--;                                     // decrease the value
    span.innerHTML = count
    console.log(span);
    if (count <= -1) {
        span.style.color = "red"
    }
    else if (count == 0) {
        span.style.color = "black"
    }
})

reset.addEventListener('click', function() {
     count = 0
    span.innerHTML = count

    if (count == 0) {
        span.style.color = "black"
    }
    
})
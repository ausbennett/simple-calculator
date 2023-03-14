var x = "0";
var y = "0";
var op = "#";

const screen = document.getElementById("screen");
screen.innerText = x;

//add an event listener to all <a> that on click sets appens the number to x
document.querySelectorAll('a').forEach(item => {
    item.addEventListener('click', () => {
        //handle click
        if(x == "0") {x = ""}
        x = x + item.innerText;
        screen.innerText = x;
    })
})

document.getElementById('clear').addEventListener("click", () => {
    x = "0"
    y = "0"
    op = "#"
    screen.innerText = x;
    document.getElementById("screen").classList.remove("bg-success")
})

document.getElementById('submit').addEventListener("click", () => {
    if(op == "#"){ 
        window.alert("No operator chosen!") 
        return
    }
    if(op == "plus"){ screen.innerText = (parseInt(y) + parseInt(x)) }
    if(op == "minus"){ screen.innerText = (parseInt(y) - parseInt(x)) }
    
    document.getElementById("screen").classList.add("bg-success")
})

document.getElementById('plus').addEventListener("click", () => {
    op = "plus"
    y = x;
    x = ""
    screen.innerText = "--";

 })
 
 document.getElementById('minus').addEventListener("click", () => {
    op = "minus"
    y = x;
    x = ""
    screen.innerText = "--";
 })
 
 
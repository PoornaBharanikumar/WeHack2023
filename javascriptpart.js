
let speed;
var bleh;
let loc;
let og; //original volume
let volume = 0; // resulting volume
const sz = 4, pl = 3, nh = 3, rv = 4, high = 2; //constant of each location


//document.getElementById("submit").onclick = 
function myfunction() {
    bleh = document.getElementById("high").value;
    loc = document.querySelector("places").value;
    og = document.getElementById("vol").value;
    speed = document.getElementById("speed").value;
    //volume = document.getElementById("texter").value;

    if (og <= 10 )
    {
        volume = og;
    }
    else
    {
    if (loc == bleh)
    {
        volume = og - ((high*speed)/10);
    } 
    else 
    {
        volume = og - ((pl*speed)/10);
    }
    }

    document.querySelector('.output').textContent = volume;
}
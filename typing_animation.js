var teks = 'Bingung mulai dari mana?-'
// var speed = 100
// var textPosition = 0;

var chars = teks.split('')
var message = document.getElementById("message");

// function typewriter() {
//     document.querySelector("#message").innerHTML = teks[0].substring(0, textPosition) 
//     if(textPosition++ != teks[0].length) {
//         setTimeout(typewriter, speed)
//     }
//   }


var i = 0;
setInterval(function () {
    if (i < chars.length) {
        message.innerHTML += chars[i++];
    } else {
        i = 0;
        message.innerHTML = "-";
    }
}, 165);

//   window.addEventListener("load", typewriter);

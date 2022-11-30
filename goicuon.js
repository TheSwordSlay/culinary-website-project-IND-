let tambah = document.getElementById('tambahp');
let kurang = document.getElementById('kurangp');

let porsi = document.getElementById('porsicounter');
let temp = 1;

let jbahan1 = parseInt(document.getElementById('b1').innerHTML);
let jbahan2 = parseFloat(document.getElementById('b2').innerHTML);
let jbahan3 = parseFloat(document.getElementById('b3').innerHTML);
let jbahan4 = parseInt(document.getElementById('b4').innerHTML);
let jbahan5 = parseInt(document.getElementById('b5').innerHTML);
let jbahan6 = parseInt(document.getElementById('b6').innerHTML);
let jbahan7 = parseInt(document.getElementById('b7').innerHTML);
let jbahan8 = parseInt(document.getElementById('b8').innerHTML);
let jbahan9 = parseFloat(document.getElementById('b9').innerHTML);
let jbahan10 = parseInt(document.getElementById('b10').innerHTML);
let jbahan11 = parseInt(document.getElementById('b11').innerHTML);


function plus(){
    temp += 1;
    porsi.innerHTML = temp;
    document.getElementById('b1').innerHTML = parseInt(document.getElementById('b1').innerHTML) + jbahan1;
    document.getElementById('b2').innerHTML = parseFloat(document.getElementById('b2').innerHTML) + jbahan2;
    document.getElementById('b3').innerHTML = parseFloat(document.getElementById('b3').innerHTML) + jbahan3;
    document.getElementById('b4').innerHTML = parseInt(document.getElementById('b4').innerHTML) + jbahan4;
    document.getElementById('b5').innerHTML = parseInt(document.getElementById('b5').innerHTML) + jbahan5;
    document.getElementById('b6').innerHTML = parseInt(document.getElementById('b6').innerHTML) + jbahan6;
    document.getElementById('b7').innerHTML = parseInt(document.getElementById('b7').innerHTML) + jbahan7;
    document.getElementById('b8').innerHTML = parseInt(document.getElementById('b8').innerHTML) + jbahan8;
    document.getElementById('b9').innerHTML = parseFloat(document.getElementById('b9').innerHTML) + jbahan9;
    document.getElementById('b10').innerHTML = parseInt(document.getElementById('b10').innerHTML) + jbahan10;
    document.getElementById('b11').innerHTML = parseInt(document.getElementById('b11').innerHTML) + jbahan11;
   
}

function min(){
    temp -= 1;
    if (temp < 1) {
        temp = 1;
        alert("Porsi tidak boleh kurang dari 1.");
    } else {
        porsi.innerHTML = temp;
        document.getElementById('b1').innerHTML = parseInt(document.getElementById('b1').innerHTML) - jbahan1;
        document.getElementById('b2').innerHTML = parseFloat(document.getElementById('b2').innerHTML) - jbahan2;
        document.getElementById('b3').innerHTML = parseFloat(document.getElementById('b3').innerHTML) - jbahan3;
        document.getElementById('b4').innerHTML = parseInt(document.getElementById('b4').innerHTML) - jbahan4;
        document.getElementById('b5').innerHTML = parseInt(document.getElementById('b5').innerHTML) - jbahan5;
        document.getElementById('b6').innerHTML = parseInt(document.getElementById('b6').innerHTML) - jbahan6;
        document.getElementById('b7').innerHTML = parseInt(document.getElementById('b7').innerHTML) - jbahan7;
        document.getElementById('b8').innerHTML = parseInt(document.getElementById('b8').innerHTML) - jbahan8;
        document.getElementById('b9').innerHTML = parseFloat(document.getElementById('b9').innerHTML) - jbahan9;
        document.getElementById('b10').innerHTML = parseInt(document.getElementById('b10').innerHTML) - jbahan10;
        document.getElementById('b11').innerHTML = parseInt(document.getElementById('b11').innerHTML) - jbahan11;
       
        
    }
}

tambah.addEventListener('click', plus);
kurang.addEventListener('click', min);
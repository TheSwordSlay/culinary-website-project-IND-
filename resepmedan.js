let tambah = document.getElementById('tambahp');
let kurang = document.getElementById('kurangp');

let porsi = document.getElementById('porsicounter');
let temp = 1;

let jbahan1 = parseInt(document.getElementById('b1').innerHTML);
let jbahan2 = parseInt(document.getElementById('b2').innerHTML);
let jbahan3 = parseInt(document.getElementById('b3').innerHTML);
let jbahan4 = parseInt(document.getElementById('b4').innerHTML);
let jbahan5 = parseInt(document.getElementById('b5').innerHTML);
let jbahan6 = parseInt(document.getElementById('b6').innerHTML);
let jbahan7 = parseInt(document.getElementById('b7').innerHTML);
let jbahan8 = parseInt(document.getElementById('b8').innerHTML);
let jbahan9 = parseInt(document.getElementById('b9').innerHTML);
let jbahan10 = parseInt(document.getElementById('b10').innerHTML);
let jbahan11 = parseInt(document.getElementById('b11').innerHTML);
let jbahan12 = parseInt(document.getElementById('b12').innerHTML);
let jbahan13 = parseInt(document.getElementById('b13').innerHTML);
let jbahan14 = parseInt(document.getElementById('b14').innerHTML);
let jbahan15 = parseInt(document.getElementById('b15').innerHTML);
let jbahan16 = parseInt(document.getElementById('b16').innerHTML);
let jbahan17 = parseInt(document.getElementById('b17').innerHTML);
let jbahan18 = parseInt(document.getElementById('b18').innerHTML);
let jbahan19 = parseInt(document.getElementById('b19').innerHTML);
let jbahan20 = parseFloat(document.getElementById('b20').innerHTML);

function plus(){
    temp += 1;
    porsi.innerHTML = temp;
    document.getElementById('b1').innerHTML = parseInt(document.getElementById('b1').innerHTML) + jbahan1;
    document.getElementById('b2').innerHTML = parseInt(document.getElementById('b2').innerHTML) + jbahan2;
    document.getElementById('b3').innerHTML = parseInt(document.getElementById('b3').innerHTML) + jbahan3;
    document.getElementById('b4').innerHTML = parseInt(document.getElementById('b4').innerHTML) + jbahan4;
    document.getElementById('b5').innerHTML = parseInt(document.getElementById('b5').innerHTML) + jbahan5;
    document.getElementById('b6').innerHTML = parseInt(document.getElementById('b6').innerHTML) + jbahan6;
    document.getElementById('b7').innerHTML = parseInt(document.getElementById('b7').innerHTML) + jbahan7;
    document.getElementById('b8').innerHTML = parseInt(document.getElementById('b8').innerHTML) + jbahan8;
    document.getElementById('b9').innerHTML = parseInt(document.getElementById('b9').innerHTML) + jbahan9;
    document.getElementById('b10').innerHTML = parseInt(document.getElementById('b10').innerHTML) + jbahan10;
    document.getElementById('b11').innerHTML = parseInt(document.getElementById('b11').innerHTML) + jbahan11;
    document.getElementById('b12').innerHTML = parseInt(document.getElementById('b12').innerHTML) + jbahan12;
    document.getElementById('b13').innerHTML = parseInt(document.getElementById('b13').innerHTML) + jbahan13;
    document.getElementById('b14').innerHTML = parseInt(document.getElementById('b14').innerHTML) + jbahan14;
    document.getElementById('b15').innerHTML = parseInt(document.getElementById('b15').innerHTML) + jbahan15;
    document.getElementById('b16').innerHTML = parseInt(document.getElementById('b16').innerHTML) + jbahan16;
    document.getElementById('b17').innerHTML = parseInt(document.getElementById('b17').innerHTML) + jbahan17;
    document.getElementById('b18').innerHTML = parseInt(document.getElementById('b18').innerHTML) + jbahan18;
    document.getElementById('b19').innerHTML = parseInt(document.getElementById('b19').innerHTML) + jbahan19;
    document.getElementById('b20').innerHTML = parseFloat(document.getElementById('b20').innerHTML) + jbahan20;
}

function min(){
    temp -= 1;
    if (temp < 1) {
        temp = 1;
        alert("Porsi tidak boleh kurang dari 1.");
    } else {
        porsi.innerHTML = temp;
        document.getElementById('b1').innerHTML = parseInt(document.getElementById('b1').innerHTML) - jbahan1;
        document.getElementById('b2').innerHTML = parseInt(document.getElementById('b2').innerHTML) - jbahan2;
        document.getElementById('b3').innerHTML = parseInt(document.getElementById('b3').innerHTML) - jbahan3;
        document.getElementById('b4').innerHTML = parseInt(document.getElementById('b4').innerHTML) - jbahan4;
        document.getElementById('b5').innerHTML = parseInt(document.getElementById('b5').innerHTML) - jbahan5;
        document.getElementById('b6').innerHTML = parseInt(document.getElementById('b6').innerHTML) - jbahan6;
        document.getElementById('b7').innerHTML = parseInt(document.getElementById('b7').innerHTML) - jbahan7;
        document.getElementById('b8').innerHTML = parseInt(document.getElementById('b8').innerHTML) - jbahan8;
        document.getElementById('b9').innerHTML = parseInt(document.getElementById('b9').innerHTML) - jbahan9;
        document.getElementById('b10').innerHTML = parseInt(document.getElementById('b10').innerHTML) - jbahan10;
        document.getElementById('b11').innerHTML = parseInt(document.getElementById('b11').innerHTML) - jbahan11;
        document.getElementById('b12').innerHTML = parseInt(document.getElementById('b12').innerHTML) - jbahan12;
        document.getElementById('b13').innerHTML = parseInt(document.getElementById('b13').innerHTML) - jbahan13;
        document.getElementById('b14').innerHTML = parseInt(document.getElementById('b14').innerHTML) - jbahan14; 
        document.getElementById('b15').innerHTML = parseInt(document.getElementById('b15').innerHTML) - jbahan15; 
        document.getElementById('b16').innerHTML = parseInt(document.getElementById('b16').innerHTML) - jbahan16; 
        document.getElementById('b17').innerHTML = parseInt(document.getElementById('b17').innerHTML) - jbahan17; 
        document.getElementById('b18').innerHTML = parseInt(document.getElementById('b18').innerHTML) - jbahan18; 
        document.getElementById('b19').innerHTML = parseInt(document.getElementById('b19').innerHTML) - jbahan19; 
        document.getElementById('b20').innerHTML = parseFloat(document.getElementById('b20').innerHTML) - jbahan20;
    }
}

tambah.addEventListener('click', plus);
kurang.addEventListener('click', min);
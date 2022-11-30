let tambah = document.getElementById('tambahp');
let kurang = document.getElementById('kurangp');

let porsi = document.getElementById('porsicounter');
let temp = 1;

function plus(){
    temp += 1;
    porsi.innerHTML = temp;
}

function min(){
    temp -= 1;
    if (temp < 1) {
        temp = 1;
        alert("Porsi tidak boleh kurang dari 1.");
    } else {
        porsi.innerHTML = temp; 
    }
}

tambah.addEventListener('click', plus);
kurang.addEventListener('click', min);
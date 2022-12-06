let tombol = document.getElementById('startbtn');
function gantiwarna() {
    tombol.style.backgroundColor = 'rgb(238, 139, 25)';
}

function returnwarna() {
    tombol.style.backgroundColor = 'rgb(255, 251, 0)';
}

tombol.addEventListener("mouseover", gantiwarna);
tombol.addEventListener("mouseout", returnwarna);
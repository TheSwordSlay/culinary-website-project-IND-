let nasional = document.getElementById('btnNasional');
let internasional = document.getElementById('btnInternasional');
let all = document.getElementById('btnAll');
let teks = document.getElementById('teks-resep');
var a = document.getElementById("1");
var b = document.getElementById("2");
var c = document.getElementById("3");
var d = document.getElementById("4");
var e = document.getElementById("5");
var f = document.getElementById("6");
var g = document.getElementById("7");
var h = document.getElementById("8");
var i = document.getElementById("9");
var j = document.getElementById("10");

function showN() {
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    d.style.display = "block";
    e.style.display = "block";
    f.style.display = "none";
    g.style.display = "none";
    h.style.display = "none";
    i.style.display = "none";
    j.style.display = "none";
    teks.innerHTML = "List resep nasional";
}

function showIn() {
    j.style.display = "block";
    i.style.display = "block";
    h.style.display = "block";
    g.style.display = "block";
    f.style.display = "block";
    e.style.display = "none";
    d.style.display = "none";
    c.style.display = "none";
    b.style.display = "none";
    a.style.display = "none";
    teks.innerHTML = "List resep internasional";
}

function showAll() {
    a.style.display = "block";
    b.style.display = "block";
    c.style.display = "block";
    d.style.display = "block";
    e.style.display = "block";
    f.style.display = "block";
    g.style.display = "block";
    h.style.display = "block";
    i.style.display = "block";
    j.style.display = "block";
    teks.innerHTML = "List resep full";
}

nasional.addEventListener("click", showN);
internasional.addEventListener("click", showIn);
all.addEventListener("click", showAll);
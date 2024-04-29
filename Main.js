let ballon = document.querySelector('.ballon');
let point = document.querySelector('.point');
let button_1 = document.querySelector('.button-1');
let button_2 = document.querySelector('.button-2');
let button_3 = document.querySelector('.button-3');
let button_4 = document.querySelector('.button-4');
let button_5 = document.querySelector('.button-5');
let button_6 = document.querySelector('.button-6');

let résultats_1 = document.querySelector('.Prix-1');
let résultats_2 = document.querySelector('.Prix-2');
let résultats_3 = document.querySelector('.Prix-3');
let résultats_4 = document.querySelector('.Prix-4');
let résultats_5 = document.querySelector('.Prix-5');
let résultats_6 = document.querySelector('.Prix-6');

let index = 0;
let click = 1;
let prix_1 = 10;
let prix_2 = 300;
let prix_3 = 800;
let prix_4 = 10000;
let prix_5 = 75000;
let prix_6 = 250000;

let point_auto = 0;

// pointage
ballon.addEventListener("click", pointage);

function pointage() {
    index = index + click;
}

function refresh() {
    point.innerHTML = index + '€';
    résultats_1.innerHTML = prix_1 + '€';
    résultats_2.innerHTML = prix_2 + '€';
    résultats_3.innerHTML = prix_3 + '€';
    résultats_4.innerHTML = prix_4 + '€';
    résultats_5.innerHTML = prix_5 + '€';
    résultats_6.innerHTML = prix_6 + '€';
}
setInterval(refresh, 100);

// point auto 
function auto() {
    index = index + point_auto;
}
setInterval(auto, 1000)

// shop 
button_1.addEventListener("click", prix);
function prix() {
    if (index > prix_1) {
        index = index - prix_1;
        click = click * 2;
        prix_1 = prix_1 * 10;
    }
}

button_2.addEventListener("click", prix2);
function prix2() {
    if (index > prix_2) {
        index = index - prix_2;
        point_auto = point_auto + 1;
        prix_2 = prix_2 + 15;
    }
}

button_3.addEventListener("click", prix3);
function prix3() {
    if (index > prix_3) {
        index = index - prix_3;
        point_auto = point_auto + 10;
        prix_3 = prix_3 + 200;
    }
}

button_4.addEventListener("click", prix4);
function prix4() {
    if (index > prix_4) {
        index = index - prix_4;
        point_auto = point_auto + 120;
        prix_4 = prix_4 + 1200;
    }
}

button_5.addEventListener("click", prix5);
function prix5() {
    if (index > prix_5) {
        index = index - prix_5;
        point_auto = point_auto + 1000;
        prix_5 = prix_5 + 20000;
    }
}

button_6.addEventListener("click", prix6);
function prix6() {
    if (index > prix_6) {
        index = index - prix_6;
        point_auto = point_auto + 5000;
        prix_6 = prix_6 + 70000;
    }
}

// ajouter la valeur aléatoire lors d'un click sur le ballon
ballon.addEventListener("click", clickballon);

function clickballon() {
    const animationpluis = document.createElement("div");
    animationpluis.classList.add("pluit");
    animationpluis.style.left = Math.random() * 100 + "vw";
    animationpluis.style.animationDuration = Math.random() * 3 + 3 + "s";
    animationpluis.innerText = click + "€";
    document.body.appendChild(animationpluis);
    setTimeout(() => {
        animationpluis.remove();
    }, 5000);
}

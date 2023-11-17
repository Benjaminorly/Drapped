const baseline = document.querySelector("#raw p:nth-child(1)");

const rawH2 = document.querySelector("#raw h2");

const productH2 = document.querySelector("#product h2");
const productP = document.querySelector("#product p");



window.addEventListener('scroll', (e) => {

    let scrollPosition = window.scrollY;
    let taille = document.body.scrollHeight;
    let viewport = window.innerHeight;
    let taillePourcent = (window.scrollY * 100) / (taille - viewport);

    if (taillePourcent >= 6) {
        baseline.classList.add("show");
    } else {
        baseline.classList.remove("show");
    }

    if (taillePourcent >= 13) {
        rawH2.classList.add("show");
    } else {
        rawH2.classList.remove("show");
    }

    if (taillePourcent >= 33) {
        productH2.classList.add("show2");
    } else {
        productH2.classList.remove("show2");
    };

    if (taillePourcent >= 35) {
        productP.classList.add("show3");
    } else {
        productP.classList.remove("show3");
    };


    if (taillePourcent >= 85) {
        productH2.classList.remove("show2");
        productP.classList.remove("show3");
    } else {
    };


});
//This won't work for some reason... I'm not sure why.

/*window.onload = function () {
    let slides = document.getElementsByClassName('carousel-item');

    function addActive(slide) {
        slide.classList.add('active');
    }

    function removeActive(slide) {
        slide.classList.remove('active');
    }

    addActive(slides[0]);
    setInterval(function () {
        for (let i = 0; i <= slides.length; i++) {
            if (i + 1 == slides.length) {
                addActive(slides[0]);
                setTimeout(removeActive, 350, slides[i]);
                break;
            }
            if (slides[i].classList.contains('active')) {
                setTimeout(removeActive, 350, slides[i]);
                addActive(slides[i + 1]);
                break;
            }
        }
    }, 2250);
};*/

let currentIndex = 0;
let images = [];

document.addEventListener('DOMContentLoaded', function() {
    images = document.querySelectorAll('.popup-trigger');
    images.forEach((item, index) => {
        item.addEventListener('click', event => {
            currentIndex = index;
            showPopup(event.target.src);
        });
    });
});

function showPopup(src) {
    var popup = document.getElementById("popup");
    var popupImg = document.getElementById("popup-img");
    popup.style.display = "flex";
    popupImg.src = src;
}

function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    showPopup(images[currentIndex].src);
}

function nextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    showPopup(images[currentIndex].src);
}

function openClose(){
    let sideNavBar = document.getElementById("sideNavCollapsed");
    let openButton = document.getElementById("OpenButton");
    let openArrow = document.getElementById("OpenArrow");

    if (sideNavBar.style.display == "none"){
        sideNavBar.style.display = "block";
        openButton.style.top = "595px";
        openArrow.style.transform = "rotate(180deg)";
    }
    else{
        sideNavBar.style.display = "none";
        openButton.style.top = "95px";
        openArrow.style.transform = "rotate(0deg)";
    }
}

setTimeout(function() {
    if (window.innerWidth <= 735){
        let openDaysImage = document.getElementById("openDaysImage");
        openDaysImage.style.display = "none";
    }
    else {
        let openDaysImage = document.getElementById("openDaysImage");
        openDaysImage.style.display = "block";
    }

    if (window.innerWidth <= 550){
        let sideNavBar = document.getElementById("sideNavCollapsed");
        sideNavBar.style.display = "none";
    }
    else{
        let sideNavBar = document.getElementById("sideNavCollapsed");
        sideNavBar.style.display = "block";
    }
},1);

window.addEventListener('resize', function() {
    if (window.innerWidth <= 550) {
        let sideNavBar = document.getElementById("sideNavCollapsed");
        sideNavBar.style.display = "none";
    }
    else{
        let sideNavBar = document.getElementById("sideNavCollapsed");
        sideNavBar.style.display = "block";
    }

    if (window.innerWidth <= 735){
        let openDaysImage = document.getElementById("openDaysImage");
        openDaysImage.style.display = "none";
    }
    else {
        let openDaysImage = document.getElementById("openDaysImage");
        openDaysImage.style.display = "block";
    }
});

/*DOCUMENTS

document.addEventListener("DOMContentLoaded", function() {
    let currentPage = 1;
    const rows = document.querySelectorAll(".docTr");
    const numPages = Math.ceil(rows.length / 10);

    function showPage(page) {
        rows.forEach((row, index) => {
            row.style.display = (index >= (page - 1) * 10 && index < page * 10) ? "table-row" : "none";
        });
        document.querySelectorAll(".docPagination button").forEach(btn => {
            btn.classList.remove("active");
        });
        document.querySelector(`.docPagination button[data-page='${page}']`).classList.add("active");
    }

    const pagination = document.querySelector(".docPagination");
    for (let i = 1; i <= numPages; i++) {
        const btn = document.createElement("button");
        btn.textContent = i;
        btn.dataset.page = i;
        btn.classList.add(i === 1 ? "active" : "");
        btn.addEventListener("click", () => {
            showPage(i);
        });
        pagination.appendChild(btn);
    }

    showPage(currentPage);
});*/
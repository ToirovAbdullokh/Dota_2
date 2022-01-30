let menuBtn = document.querySelector(".menu-btn"),
    cancelBtn = document.querySelector(".cancel-btn"),
    menu = document.querySelector(".header__ul");

menuBtn.onclick = () => {
    menu.classList.toggle("active");

}
cancelBtn.onclick = () => {
    menu.classList.remove("active");
}

// navbar fixed top



// our-partners slider

function carousel() {
    let carouselSlider = document.querySelector(".our-partners__img"),
        carouselList = document.querySelector(".main-slider"),
        carouselItem = document.querySelector(".our-partners__slider"),
        list2;

    const speed = 1;

    const width = carouselList.offsetWidth;
    let x = 0;
    let x2 = width;

    function clone(){
        list2 = carouselList.cloneNode(true);
        carouselSlider.appendChild(list2);
        list2.style.left = `$(width)px`;
    }

    function moveFirst(){
        x -= speed;
        if(width >= Math.abs(x)){
            carouselList.style.left = `${x}px`;
        }else {
            x = width;
        }
    }


    function moveSecond(){
        x2 -= speed;

        if(list2.offsetWidth >= Math.abs(x2)){
            list2.style.left = `${x2}px`;
        }else{
            x2 = width;
        }
    }

    function hover(){
        clearInterval(a);
        clearInterval(b);
    }

    function unhover(){
        a = setInterval(moveFirst, 10);
        b = setInterval(moveSecond, 10);
    }

    clone();

    let a = setInterval(moveFirst, 10),
        b = setInterval(moveSecond, 10);

    carouselSlider.addEventListener("mouseenter", hover);
    carouselSlider.addEventListener("mouseleave", unhover);
}

carousel();


// feedback scrolling img

const prev = document.getElementById("btn-prev"),
    next = document.getElementById("btn-next"),
    slides = document.querySelectorAll(".feedback__content"),
    dots = document.querySelectorAll(".dot");

let index = 0;

const activeSlide = n => {
    for(slide of slides){
        slide.classList.remove("active");
    }
    slides[n].classList.add("active");
}


const activeDot = n => {
    for(dot of dots){
        dot.classList.remove("active");
    }
    dots[n].classList.add("active");
}

const prepareSlide = ind =>{
    activeSlide(ind);
    activeDot(ind);
}

const nextSlide = () => {
    if(index ==  slides.length - 1){
        index = 0;
        prepareSlide(index);
    } else {
        index++;
        prepareSlide(index);
    }
}


const prevSlide = () => {
    if(index ==  0){
        index =  slides.length - 1
        prepareSlide(index);
    } else {
        index--;
        prepareSlide(index);
    }
}

dots.forEach((item, indexDot) => {
    item.addEventListener("click", () => {
        index = indexDot;
        prepareSlide(index);
    })
})

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);

// growing-fast__counting 

let lvlSt = document.querySelector(".growing-fast__students"),
    StTimer = 1;

function St(){
    if(lvlSt.innerHTML < 2500){
        lvlSt.innerHTML++
    }
    if(lvlSt.innerHTML > 2005 && lvlSt.innerHTML < 2200){
        StTimer = 2;
    }
    else if(lvlSt.innerHTML > 2199 && lvlSt.innerHTML < 2300){
        StTimer = 4;
    }
    else if(lvlSt.innerHTML > 2299 && lvlSt.innerHTML < 2450){
        StTimer = 6;
    }
    else if(lvlSt.innerHTML > 2449 && lvlSt.innerHTML < 2480){
        StTimer = 8;
    }
    else if(lvlSt.innerHTML > 2479){
        StTimer = 10;
    }
    setTimeout(St, StTimer)
}
St();

let lvlTr = document.querySelector(".growing-fast__teachers"),
    TrTimer = 200;

function Tr(){
    if(lvlTr.innerHTML < 11){
        lvlTr.innerHTML++
    }
    if(lvlTr.innerHTML > 5 && lvlTr.innerHTML < 10){
        TrTimer = 350
    }
    else if(lvlTr.innerHTML > 9 && lvlTr.innerHTML < 12){
        TrTimer = 450
    }
    else if(lvlTr.innerHTML > 11){
        TrTimer = 550
    }
    setTimeout(Tr, TrTimer)
}
Tr();

let lvlSet = document.querySelector(".growing-fast__settings"),
    SetTimer = 100;

function Set(){
    if(lvlSet.innerHTML < 20){
        lvlSet.innerHTML++
    }
    if(lvlSet.innerHTML > 10 && lvlSet.innerHTML < 15){
        SetTimer = 150
    }
    else if(lvlSet.innerHTML > 14){
        SetTimer = 200
    }

    setTimeout(Set,SetTimer)
}
Set()
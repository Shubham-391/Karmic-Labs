let icon = document.querySelector(".icon");
let page = document.querySelector(".view");
let home = document.querySelector(".home");
let services = document.querySelector(".services");
let projects = document.querySelector(".projects");
let about = document.querySelector(".about");
let navbutton = document.querySelector(".nav-btn");
let span1 = document.querySelector(".span1");
let span2 = document.querySelector(".span2");
let span3 = document.querySelector(".span3");
icon.addEventListener("click", function () {
    if (page.classList !== document.querySelector("right-0")) {
        page.classList.toggle("right-0");
        document.querySelector("body").classList.toggle("overflow-hidden");
        span1.classList.toggle("close-icon1");
        span2.classList.toggle("close-icon2");
        span3.classList.toggle("close-icon3");
    }
});



home.addEventListener("click", function () {
    page.classList.toggle("right-0");
    document.querySelector("body").classList.remove("overflow-hidden");
    span1.classList.toggle("close-icon1");
    span2.classList.toggle("close-icon2");
    span3.classList.toggle("close-icon3");
});

services.addEventListener("click", function () {
    page.classList.toggle("right-0");
    document.querySelector("body").classList.remove("overflow-hidden");
    span1.classList.toggle("close-icon1");
    span2.classList.toggle("close-icon2");
    span3.classList.toggle("close-icon3");
});

projects.addEventListener("click", function () {
    page.classList.toggle("right-0");
    document.querySelector("body").classList.remove("overflow-hidden");
    span1.classList.toggle("close-icon1");
    span2.classList.toggle("close-icon2");
    span3.classList.toggle("close-icon3");
});

about.addEventListener("click", function () {
    page.classList.toggle("right-0");
    document.querySelector("body").classList.remove("overflow-hidden");
    span1.classList.toggle("close-icon1");
    span2.classList.toggle("close-icon2");
    span3.classList.toggle("close-icon3");
});

navbutton.addEventListener("click", function () {
    page.classList.toggle("right-0");
    document.querySelector("body").classList.remove("overflow-hidden");
    span1.classList.toggle("close-icon1");
    span2.classList.toggle("close-icon2");
    span3.classList.toggle("close-icon3");
});
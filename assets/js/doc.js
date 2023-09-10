let icon = document.querySelector(".icon");
let page = document.querySelector(".view");
let home = document.querySelector(".home");
let services = document.querySelector(".services");
let projects = document.querySelector(".projects");
let about = document.querySelector(".about");
let navbutton = document.querySelector(".nav-btn");
icon.addEventListener("click", function () {
    if (page.classList !== document.querySelector("right-0")) {
        page.classList.toggle("right-0");
        document.querySelector("body").classList.toggle("overflow-hidden");
    }
})

home.addEventListener("click", function () {
    page.classList.toggle("right-0");
    document.querySelector("body").classList.remove("overflow-hidden");
})

services.addEventListener("click", function () {
    page.classList.toggle("right-0");
    document.querySelector("body").classList.remove("overflow-hidden");
})

projects.addEventListener("click", function () {
    page.classList.toggle("right-0");
    document.querySelector("body").classList.remove("overflow-hidden");
})

about.addEventListener("click", function () {
    page.classList.toggle("right-0");
    document.querySelector("body").classList.remove("overflow-hidden");
})

navbutton.addEventListener("click", function () {
    page.classList.toggle("right-0");
    document.querySelector("body").classList.remove("overflow-hidden");
})
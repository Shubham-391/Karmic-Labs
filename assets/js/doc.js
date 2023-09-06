let icon = document.querySelector(".icon");
let page = document.querySelector(".view");
icon.addEventListener("click", function () {
    if (page.classList !== document.querySelector("right-0")) {
        page.classList.toggle("right-0");
    }
})
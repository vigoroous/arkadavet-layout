let burger = document.querySelector(".header__burger");
let wrap = document.querySelector(".header__wrap");
let nav = document.querySelector(".header__nav");

let header_opened = false;

burger.onclick = function (event) {
    if (!header_opened) {
        burger.classList.add("header__burger_opened");
        wrap.classList.add("header__wrap_opened");
        nav.classList.add("header__nav_opened");
        header_opened = true;
    }
    else {
        burger.classList.remove("header__burger_opened");
        wrap.classList.remove("header__wrap_opened");
        nav.classList.remove("header__nav_opened");
        header_opened = false;
    }
}
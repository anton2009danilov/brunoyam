"use strict";

window.onload = () => {
    const burgerBtn = document.getElementById("burger-btn");
    const burgerContent = document.getElementById("burger-content");

    burgerBtn.addEventListener("click", () => {
        if (!burgerContent.classList.contains("d-none")) {
            burgerContent.classList.add("d-none");
        }
        else {
            burgerContent.classList.remove("d-none");
        }
    });
}
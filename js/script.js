"use strict";

const headerBurgerBtn = document.getElementById("header-burger-btn");
const headerBurgerList = document.getElementById("header-burger-list")

headerBurgerBtn.addEventListener("click", (e) => {
	if (!headerBurgerList.style.opacity || headerBurgerList.style.opacity === "0") {
		headerBurgerList.style.opacity = "1";
	}
	else {
		headerBurgerList.style.opacity = "0";
	}
});
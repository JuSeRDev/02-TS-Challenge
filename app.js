"use strict";
fetch("./data.json")
    .then(response => response.json())
    .then((data) => {
    data.forEach((item) => {
        let amount = item.amount.toString();
        const dayEment = document.querySelector(`.${item.day}`);
        if (dayEment) {
            dayEment.innerHTML = `$${amount}`;
        }
    });
});
const bars = document.querySelectorAll(".bar");
bars.forEach(bar => {
    bar.addEventListener("mouseover", () => {
        const amountElement = bar.previousElementSibling; //previousElementSibling agrega el hermano del div que se llama (bar)
        amountElement.classList.toggle("amount-active");
    });
    bar.addEventListener("mouseout", () => {
        const amountElement = bar.previousElementSibling;
        amountElement.classList.toggle("amount-active");
    });
});

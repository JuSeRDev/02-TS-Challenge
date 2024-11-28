interface Data {
    day: string;
    amount: number;
  }

fetch("./data.json")
.then(response => response.json())
.then((data: Data[]) => {
    data.forEach((item: Data) => {
        let amount: string = item.amount.toString()
        const dayEment = document.querySelector(`.${item.day}`) as HTMLParagraphElement
        if (dayEment) {
            dayEment.innerHTML = `$${amount}`
        } 
    });
})

const bars = document.querySelectorAll(".bar") as NodeListOf<HTMLDivElement>

bars.forEach(bar => {
    bar.addEventListener("mouseover", ()=>{
        const amountElement = bar.previousElementSibling as HTMLDivElement //previousElementSibling agrega el hermano del div que se llama (bar)
        amountElement.classList.toggle("amount-active")
    })

    bar.addEventListener("mouseout", ()=>{
        const amountElement = bar.previousElementSibling as HTMLDivElement
        amountElement.classList.toggle("amount-active")
    })

});

const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".cards .card");

const filterCards =(e) =>{
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")
    cards.forEach(card => {
        (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all")? card.classList.remove("hide") : card.classList.add("hide")
    })
}

filterButtons.forEach(button => button.addEventListener("click", filterCards))
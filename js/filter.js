const searchInput = document.getElementById('search-input');
const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".cards .card");

const filterCards = (e) => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    cards.forEach(card => {
        (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all") ? card.classList.remove("hide") : card.classList.add("hide");
    });
}

const searchCards = () => {
    const searchText = searchInput.value.toLowerCase();

    if (searchText.length > 3) {
        cards.forEach(card => {
            const cardTitle = card.querySelector('.cart-title').textContent.toLowerCase();
            const cardDescription = card.querySelector('.cart-text').textContent.toLowerCase();

            if (cardTitle.includes(searchText) || cardDescription.includes(searchText)) {
                card.classList.remove("hide");
            } else {
                card.classList.add("hide");
            }
        });
    } else {
        cards.forEach(card => card.classList.remove("hide"));
    }
}

searchInput.addEventListener('input', searchCards);
filterButtons.forEach(button => button.addEventListener("click", filterCards));


searchInput.addEventListener('input', searchCards);
filterButtons.forEach(button => button.addEventListener("click", filterCards));

window.sliderState = 0





const filterButtons = document.querySelectorAll(".filter_buttons button");
const filterableCards = document.querySelectorAll(".filterable-cards .card");


//define filterCards
const filterCards = e => {
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
    console.log(e.target);

    //iterate each filterable card
    filterableCards.forEach(card => {

        card.classList.add("hide");
        //check match
        if (card.dataset.name === e.target.dataset.name || e.target.dataset.name === "all"){
            card.classList.remove("hide");
        }
    });
};

//click event
filterButtons.forEach(button => button.addEventListener("click", filterCards));
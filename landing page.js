// Smooth scroll button
document.getElementById("exploreBtn").addEventListener("click", () => {
    document.querySelector(".features").scrollIntoView({
        behavior: "smooth"
    });
});

// Scroll animation
const cards = document.querySelectorAll(".card");

window.addEventListener("scroll", () => {
    const triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if (cardTop < triggerBottom) {
            card.classList.add("show");
        }
    });
});
const onlineHolder = document.querySelector(".online-holder");
const offlineHolder = document.querySelector(".offline-holder");
const switchToOnline = document.querySelector(".online");
const switchToOffline = document.querySelector(".offline");

switchToOffline.onclick = (e) => {
    e.preventDefault();
    onlineHolder.style.display = "none";
    offlineHolder.style.display = "block";
}

switchToOnline.onclick = (e) => {
    e.preventDefault();
    offlineHolder.style.display = "none";
    onlineHolder.style.display = "block";
}


const listItems = document.querySelectorAll(".nav-link");

listItems.forEach(item => {
    item.addEventListener("click", (e) => {

        listItems.forEach(el => el.classList.remove("active"));

        item.classList.add("active");
    });
});



function scrollProducts(amount) {
    document.querySelector(".products-row").scrollBy({
        left: amount,
        behavior: "smooth"
    });
}

document.querySelectorAll(".scroll-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
        const scrollAmount = Number(btn.dataset.scroll);

        document.querySelector(".products-row").scrollBy({
            left: scrollAmount,
            behavior: "smooth"
        });
    });
});
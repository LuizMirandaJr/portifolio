const switchBtn = document.getElementById("trocaTema");
const body = document.body;

switchBtn.addEventListener("click", () => {
    body.classList.toggle("day-theme");
});


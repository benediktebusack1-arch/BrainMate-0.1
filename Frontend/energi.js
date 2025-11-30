console.log("Energy page JS loaded");

const buttons = document.querySelectorAll(".image-btn");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
    });
});

const nextBtn = document.getElementById("fortsætknap"); 
nextBtn.disabled = true;

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        nextBtn.disabled = false;
    });
});

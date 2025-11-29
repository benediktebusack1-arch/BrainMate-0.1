console.log("Login modal script loaded");

const modal = document.getElementById("loginPopup");
const openBtn = document.getElementById("openLogin");
const closeBtn = document.querySelector(".close");
const cancelBtn = document.querySelector(".cancelbtn");

// Åbn
openBtn.onclick = () => {
    modal.style.display = "block";
}

// Luk (kryds)
closeBtn.onclick = () => {
    modal.style.display = "none";
}

// Cancel knap
cancelBtn.onclick = () => {
    modal.style.display = "none";
    modal.querySelector("form").reset();
}

// Luk ved klik udenfor
window.onclick = e => {
    if (e.target === modal) modal.style.display = "none";
}

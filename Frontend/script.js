console.log("Login modal script loaded");
console.log("Signin modal script loaded");

// login modal (pop-up)

const modal = document.getElementById("loginPopup");
const openBtn = document.getElementById("openLogin");
const closeLogin = document.querySelector("#loginPopup .close");
const cancelBtn = document.querySelector(".cancelbtn");
const modalContent = modal.querySelector(".modal-content");

// Åbn
openBtn.addEventListener("click", () => {
    modal.style.display = "block";
});

// Luk (kryds)
if (closeLogin) closeLogin.addEventListener("click", () => {
    modal.style.display = "none";
});

// Luk ved klik udenfor — lyt kun på modal (overlay)
modal.addEventListener("click", (event) => {
    // hvis klik IKKE er inde i .modal-content => luk
    if (!event.target.closest(".modal-content")) {
        modal.style.display = "none";
    }
});

// Opret bruger modal (pop-up)

const modal2 = document.getElementById("signupPopup");
const openBtn2 = document.getElementById("openSignUp");
const closeSignup = document.querySelector("#signupPopup .close");

// Åbn
openBtn2.addEventListener("click", () => {
    modal2.style.display = "block";
});

// Luk (kryds)
if (closeSignup) closeSignup.addEventListener("click", () => {
    modal2.style.display = "none";
});

// Luk ved klik udenfor — lyt kun på modal (overlay)
modal2.addEventListener("click", (event) => {
    // hvis klik IKKE er inde i .modal-content => luk
    if (!event.target.closest(".modal-content")) {
        modal2.style.display = "none";
    }
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}

// ESC tast luk
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") modal.style.display = "none";
});
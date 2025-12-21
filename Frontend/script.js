// INDEX.HTML

function initLoginModals() {
    const modal = document.getElementById("loginPopup");
    const openBtn = document.getElementById("openLogin");
    const closeLogin = document.querySelector("#loginPopup .close");

    if (!modal || !openBtn) return;

    openBtn.addEventListener("click", () => {
        modal.style.display = "block";
    });

    if (closeLogin) {
        closeLogin.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }

    modal.addEventListener("click", (event) => {
        if (!event.target.closest(".modal-content")) {
            modal.style.display = "none";
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") modal.style.display = "none";
    });
}

function initSignupModals() {
    const modal2 = document.getElementById("signupPopup");
    const openBtn2 = document.getElementById("openSignUp");
    const closeSignup = document.querySelector("#signupPopup .close");

    if (!modal2 || !openBtn2) return;

    openBtn2.addEventListener("click", () => {
        modal2.style.display = "block";
    });

    if (closeSignup) {
        closeSignup.addEventListener("click", () => {
            modal2.style.display = "none";
        });
    }

    modal2.addEventListener("click", (event) => {
        if (!event.target.closest(".modal-content")) {
            modal2.style.display = "none";
        }
    });
}

// ENERGINIVEAU.HTML

function initEnergyLevel() {
    const titleEl = document.getElementById("question");
    const answersEl = document.getElementById("answers");
    const nextBtn = document.getElementById("nextBtn");

    if (!titleEl || !answersEl || !nextBtn) return;

    const questions = [
        {
            title: "How much energy do you have at the current moment?",
            answers: [
                { text: "Low 🪫" },
                { text: "Medium 😌" },
                { text: "High ⚡" },
                { text: "Overstimulated 🫠" },
            ]
        }
    ];

    let currentQuestionIndex = 0;
    let userAnswers = [];

    function renderQuestion() {
        const question = questions[currentQuestionIndex];
        answersEl.innerHTML = "";
        titleEl.textContent = question.title;
        nextBtn.disabled = true;

        question.answers.forEach((answer) => {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.classList.add("answer-btn");
            btn.textContent = answer.text;

            btn.addEventListener("click", () => {
                document
                    .querySelectorAll(".answer-btn")
                    .forEach(b => b.classList.remove("active"));

                btn.classList.add("active");
                btn.classList.remove("button-hover")
                userAnswers[currentQuestionIndex] = answer.text;
                nextBtn.disabled = false;
            });

            answersEl.appendChild(btn);
        });
    }

    nextBtn.addEventListener("click", () => {
        if (!userAnswers[currentQuestionIndex]) {
            alert("Please choose an option before continuing");
            return;
        }
    });

    renderQuestion();
}


// INIT

document.addEventListener("DOMContentLoaded", () => {
    const page = document.body.dataset.page;

    if (page == "index") {
        initLoginModals();
        initSignupModals();
    }

    if (page == "energy") {
        initEnergyLevel();
    }
});


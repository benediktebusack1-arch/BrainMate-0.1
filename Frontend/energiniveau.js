const questions = [
    {
        title: "How much energy do you have at the current moment?",
        answers: [
            { text: "Low 🪫" },
            { text: "Medium 😌" },
            { text: "High ⚡" },
            { text: "Overstimulated 🫠" },
        ]
    },
];

let currentQuestionIndex = 0;
let userAnswers = [];

// HTML elementer
const titleEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const nextBtn = document.getElementById("nextBtn");

// Hvis du ikke har en back-knap-funktion, definer en tom fallback så koden ikke fejler:
function updateBackButton() {
  // placeholder — tilpas hvis du har en back-knap
  // fx: document.getElementById('backBtn').disabled = currentQuestionIndex === 0;
}

// Tegn aktivt spørgsmål
function renderQuestion() {
    const question = questions[currentQuestionIndex];

    // Ryd tidligere knapper
    answersEl.innerHTML = "";

    // Titel
    titleEl.textContent = question.title;
    nextBtn.disabled = true;

    question.answers.forEach((answer) => {
        const btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.type = "button";
        btn.textContent = answer.text;

        btn.addEventListener("click", () => {
            document.querySelectorAll(".answer-btn")
                .forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            userAnswers[currentQuestionIndex] = answer.text;
            nextBtn.disabled = false;
        });

        answersEl.appendChild(btn);
    });
}

// NEXT
nextBtn.addEventListener("click", () => {
    if (!userAnswers[currentQuestionIndex]) {
        alert("Please choose an option before continuing");
        return;
    }

    currentQuestionIndex++; 

    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        window.location.href = "homepage.html";
    }
});


// Start
document.addEventListener("DOMContentLoaded", () => {
    renderQuestion();
    updateBackButton();
});


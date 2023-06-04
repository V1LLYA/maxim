console.time("CodeExecution");

// Проверка ответов
function checkAnswers() {
    const questions = document.querySelectorAll('.question');
    for (const question of questions) {
        const inputs = question.querySelectorAll('input[type="radio"]');
        const answered = Array.from(inputs).some((input) => input.checked);
        if (!answered) {
            return false;
        }
    }
    return true;
}

// Расчет результата
function calculateScore() {
    const answers = Array.from(document.querySelectorAll('input[type="radio"]:checked'));
    let score = 0;
    answers.forEach((answer) => {
        score += parseInt(answer.value, 10);
    });
    return score;
}

// Переход к странице результатов
function goToResultPage(score) {
    sessionStorage.setItem('testResult', score);
    window.location.href = 'result.html';  // Перенаправление на страницу с результатами
}

// Обновление прогресс-бара
function updateProgressBar() {
    const totalQuestions = document.querySelectorAll('.question').length;
    const answeredQuestions = document.querySelectorAll('input:checked').length;
    const progress = (answeredQuestions / totalQuestions) * 100;
    progressBar.style.width = progress + '%';
}

// Обработчик событий кнопки
function showResult() {
    if (!checkAnswers()) {
        alert('Пожалуйста, ответьте на все вопросы перед отправкой');
        return;
    }

    const score = calculateScore();
    goToResultPage(score);
}

const submitBtn = document.getElementById('submit-btn');
const progressBar = document.getElementById('progress-bar');

// Инициализация
submitBtn.addEventListener('click', showResult);

// Событие на изменение ответов
const inputs = document.querySelectorAll('input[type="radio"]');
inputs.forEach((input) => {
    input.addEventListener('change', () => {
        updateProgressBar();
        // Проверка валидации формы
        if (checkAnswers()) {
            submitBtn.removeAttribute('disabled');
            submitBtn.style.backgroundColor = '#007bff';
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.style.backgroundColor = '#ccc';
        }
    });
});

console.timeEnd("CodeExecution");
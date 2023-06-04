window.onload = function() {
    const result = sessionStorage.getItem('testResult');

    if (result === null) {
        document.getElementById('result-text').textContent = 'Ошибка: результат теста не найден.';
        return;
    }
    sessionStorage.removeItem('testResult');  // Опционально: удалить результат из хранилища

    document.getElementById('score').textContent = result;

    if(result <= 15) {
        document.getElementById('interpretation').textContent = "Очень низкая самооценка";
    } else if(result <= 25) {
        document.getElementById('interpretation').textContent = "Низкая самооценка";
    } else if(result <= 29) {
        document.getElementById('interpretation').textContent = "Средняя самооценка";
    } else {
        document.getElementById('interpretation').textContent = "Высокая самооценка";
    }
}

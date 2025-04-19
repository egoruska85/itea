let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');

    if (index >= slides.length) {
        currentSlide = 0; // Если индекс больше количества слайдов, возвращаемся к первому
    } else if (index < 0) {
        currentSlide = slides.length - 1; // Если индекс меньше нуля, переходим к последнему
    } else {
        currentSlide = index; // Устанавливаем текущий слайд
    }

    const offset = -currentSlide * 100; // Вычисляем смещение для отображения текущего слайда
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Функция для изменения слайда
function changeSlide(direction) {
   showSlide(currentSlide + direction);
}

// Автоматическая смена слайдов (опционально)
setInterval(() => changeSlide(1), 5000); // Меняем слайд каждые 5 секунд

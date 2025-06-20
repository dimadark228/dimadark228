document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для кнопки перехода на официальный сайт
    const officialSiteBtn = document.getElementById('officialSiteBtn');
    
    officialSiteBtn.addEventListener('click', function() {
        // Открываем официальный сайт Песняров в новой вкладке
        window.open('https://pesnyary.com/', '_blank');
        
        // Можно также добавить анимацию или дополнительное действие
        this.innerHTML = 'Переход...';
        setTimeout(() => {
            this.innerHTML = 'Посетить официальный сайт';
        }, 1000);
    });
    
    // Плавная прокрутка для навигации
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Анимация карточек при загрузке
    const cards = document.querySelectorAll('.card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100 * index);
    });
});
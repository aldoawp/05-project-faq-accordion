document.addEventListener('DOMContentLoaded', () => {
    const faqElements = document.querySelectorAll('.faq');

    faqElements.forEach(faq => {
        faq.addEventListener('click', () => {
            
            const minusIcon = faq.querySelector('img[alt="minus icon"]');
            const plusIcon = faq.querySelector('img[alt="plus icon"]');
            
            if (minusIcon.classList.contains('hidden')) {
                plusIcon.classList.add('hidden');
                minusIcon.classList.remove('hidden');
            } else {
                plusIcon.classList.remove('hidden');
                minusIcon.classList.add('hidden');
            }
            
            
            const content = faq.querySelector('p');
            content.classList.toggle('hidden');
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.intro, .projects, .footer');
        const screenPosition = window.innerHeight / 1.3;

        sections.forEach(section => {
            const sectionPosition = section.getBoundingClientRect().top;
            if (sectionPosition < screenPosition) {
                section.classList.add('visible');
            }
        });
    });
});

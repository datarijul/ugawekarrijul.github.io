document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        const intro = document.getElementById('intro');
        const projects = document.getElementById('projects');
        const introPosition = intro.getBoundingClientRect().top;
        const projectsPosition = projects.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (introPosition < screenPosition) {
            intro.classList.add('visible');
        }
        if (projectsPosition < screenPosition) {
            projects.classList.add('visible');
        }
    });
});

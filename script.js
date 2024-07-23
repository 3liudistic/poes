window.addEventListener('load', function() {
    const container = document.querySelector('.container');
    setTimeout(() => {
        container.style.opacity = 1;
        container.style.transform = 'translateY(0)';
    }, 1000); // 1 second delay before starting the animation
});

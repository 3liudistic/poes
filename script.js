window.addEventListener('load', function() {
    const container = document.querySelector('.container');
    const timeElement = document.getElementById('time');

    // Function to update time
    function updateTime() {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        timeElement.textContent = `Local Time: ${hours}:${minutes}:${seconds}`;
    }

    setInterval(updateTime, 1000);
    updateTime();

    setTimeout(() => {
        container.style.opacity = 1;
        container.style.transform = 'translateY(0)';
    }, 1000); // 1 second delay before starting the animation
});

function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    timeElement.innerHTML = `<span class="data-text">Local Time:</span><span class="data-value">${hours}:${minutes}:${seconds}</span>`;

    // Update the duplicate time element for seamless scrolling
    const timeDuplicateElement = document.getElementById('time-duplicate');
    timeDuplicateElement.innerHTML = `<span class="data-text">Local Time:</span><span class="data-value">${hours}:${minutes}:${seconds}</span>`;
}

setInterval(updateTime, 1000);
updateTime(); // Initial call to set time immediately

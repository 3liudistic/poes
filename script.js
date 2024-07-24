window.addEventListener('load', function() {
    const container = document.querySelector('.container');
    setTimeout(() => {
        container.style.opacity = 1;
        container.style.transform = 'translateY(0)';
    }, 1000); // 1 second delay before starting the animation
});

    function updateCounters() {
        // Example: Fetch data from your backend
        fetch('/api/stats')
            .then(response => response.json())
            .then(data => {
                document.getElementById('tech-waste').textContent = `Tech Waste: ${data.techWaste}`;
                document.getElementById('recycling-done').textContent = `Recycling Done: ${data.recyclingDone}`;
                document.getElementById('devices-released').textContent = `Devices Released: ${data.devicesReleased}`;
                document.getElementById('devices-thrown-away').textContent = `Devices Thrown Away: ${data.devicesThrownAway}`;
                updateGraph(data.devicesRepaired);
            });
    }

    function updateGraph(data) {
        // Update graph with new data
        const ctx = document.getElementById('devices-repaired-graph').getContext('2d');
        new Chart(ctx, {
            type: 'line',
            data: {
                labels: data.map(item => item.date),
                datasets: [{
                    label: 'Devices Repaired',
                    data: data.map(item => item.value),
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    x: {
                        display: false // Hide x-axis labels for compact display
                    },
                    y: {
                        display: false // Hide y-axis labels for compact display
                    }
                },
                elements: {
                    point: {
                        radius: 0 // Hide data points for cleaner look
                    }
                },
                plugins: {
                    legend: {
                        display: false // Hide legend
                    }
                }
            }
        });
    }

    setInterval(updateClock, 1000);
    setInterval(updateCounters, 60000);

    // Initial call
    updateClock();
    updateCounters();
});

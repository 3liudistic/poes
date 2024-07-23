const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const stats = {
    techWaste: 5000,
    recyclingDone: 2000,
    devicesReleased: 3000,
    devicesThrownAway: 1000,
    devicesRepaired: [
        { date: '2024-01-01', value: 10 },
        { date: '2024-01-02', value: 15 },
        // More data points...
    ]
};

app.get('/api/stats', (req, res) => {
    res.json(stats);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

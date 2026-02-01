// Chart data - production over 12 hours
const hours = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
const production = [2100, 2050, 2150, 2300, 2450, 2500, 2480, 2520, 2490, 2400, 2300, 2200];

// Create chart
const ctx = document.getElementById('productionChart').getContext('2d');
const chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: hours,
        datasets: [{
            label: 'Production (MW)',
            data: production,
            borderColor: '#ffd700',
            backgroundColor: 'rgba(255, 215, 0, 0.1)',
            borderWidth: 3,
            fill: true,
            tension: 0.4
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white',
                    font: {
                        size: 14
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: false,
                ticks: { color: 'white' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            },
            x: {
                ticks: { color: 'white' },
                grid: { color: 'rgba(255, 255, 255, 0.1)' }
            }
        }
    }
});

// Create map centered on Europe
const map = L.map('map').setView([50, 10], 4);

// Add tile layer (map background)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Geothermal power plant locations in Europe
const plants = [
    { name: "Larderello, Italy", lat: 43.2467, lon: 10.8703, power: "594 MW" },
    { name: "Nesjavellir, Iceland", lat: 64.1108, lon: -21.2414, power: "120 MW" },
    { name: "Hellisheiði, Iceland", lat: 64.0219, lon: -21.3147, power: "303 MW" },
    { name: "Krafla, Iceland", lat: 65.7167, lon: -16.7833, power: "60 MW" },
    { name: "Landau, Germany", lat: 49.1989, lon: 8.1181, power: "3 MW" },
    { name: "Soultz-sous-Forêts, France", lat: 48.9333, lon: 7.8833, power: "1.5 MW" },
    { name: "Reykjanes, Iceland", lat: 63.8167, lon: -22.7167, power: "100 MW" }
];

// Add markers for each power plant
plants.forEach(plant => {
    const marker = L.marker([plant.lat, plant.lon]).addTo(map);
    marker.bindPopup(`
        <b>${plant.name}</b><br>
        Capacity: ${plant.power}
    `);
});
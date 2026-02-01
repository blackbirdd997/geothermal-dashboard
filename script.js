// Chart data - production over 12 hours
const hours = ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'];
const production = [2100, 2050, 2150, 2300, 2450, 2500, 2480, 2520, 2490, 2400, 2300, 2200];

// Kreiraj mapu centriranu na Europu
const map = L.map('map').setView([50, 10], 4);

// Dodaj tile layer (pozadinu mape)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Učitaj CSV datoteku s podacima o elektranama
Papa.parse('geothermal-plants.csv', {
    download: true,
    header: true,
    complete: function(results) {
        console.log('Loaded plants:', results.data);
        
        // Dodaj marker za svaku elektranu
        results.data.forEach(function(plant) {
            // Provjeri da li ima sve potrebne podatke
            if (plant.lat && plant.lon && plant.name) {
                const marker = L.marker([parseFloat(plant.lat), parseFloat(plant.lon)]).addTo(map);
                
                marker.bindPopup(`
                    <b>${plant.name}</b><br>
                    ${plant.country}<br>
                    Capacity: ${plant.capacity} MW
                `);
            }
        });
    },
    error: function(error) {
        console.error('Error loading CSV:', error);
    }
});
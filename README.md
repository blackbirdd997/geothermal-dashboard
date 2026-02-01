# Geothermal Energy Dashboard 🌍⚡

Interactive dashboard tracking geothermal energy production in Europe and comparing it with AI data center consumption.

## 🌐 Live Demo
**[View Dashboard](https://blackbirdd997.github.io/geothermal-dashboard/)**

## 📊 Features

### Current Implementation ✅
- **Interactive Map**: Displays 20+ geothermal power plants across Europe
  - Italy (5 plants)
  - Iceland (7 plants)
  - Germany (5 plants)
  - France (3 plants)
- **Real Data Statistics**:
  - European geothermal production: ~28 TWh/year
  - AI Data Center consumption: ~60 TWh/year
  - Coverage potential: 47%
- **Production Chart**: Historical production data over 24-hour period
- **CSV Data Source**: External data file for easy maintenance
- **Responsive Design**: Works on desktop and mobile

### Tech Stack 🛠️
- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Mapping**: Leaflet.js
- **Charts**: Chart.js
- **Data Format**: CSV (PapaParse for parsing)
- **Hosting**: GitHub Pages

## 📁 Project Structure
```
geothermal-dashboard/
├── index.html              # Main HTML file
├── style.css              # Styling
├── script.js              # JavaScript logic
├── geothermal-plants.csv  # Power plant data
└── README.md              # This file
```

## 🚀 How to Run Locally

### Prerequisites
- Python 3 (pre-installed on macOS)

### Steps
1. Clone the repository:
```bash
   git clone https://github.com/blackbirdd997/geothermal-dashboard.git
   cd geothermal-dashboard
```

2. Start local server (to avoid CORS issues):
```bash
   python3 -m http.server 8000
```

3. Open browser and navigate to:
```
   http://localhost:8000
```

## 📈 Data Sources

- **Geothermal Production**: International Energy Agency (IEA) 2024
- **AI Data Center Consumption**: European Commission Energy Reports 2024
- **Plant Locations**: ThinkGEO Global Geothermal Database
- **Last Updated**: January 2025

## 🔄 Future Enhancements (TODO)

### Priority 1: Real-Time Data Integration
- [ ] Integrate ENTSO-E API for near-real-time European energy production
- [ ] Add automatic data refresh (every hour)
- [ ] Display last update timestamp
- [ ] Add loading states and error handling

### Priority 2: Enhanced Visualizations
- [ ] Color-coded markers by plant capacity (small/medium/large)
- [ ] Add heatmap overlay showing geothermal potential
- [ ] Interactive time-series chart with historical data
- [ ] Add comparison chart: geothermal vs other renewables

### Priority 3: Advanced Features
- [ ] Filter plants by country
- [ ] Search functionality for specific plants
- [ ] Statistics breakdown by country
- [ ] Add more European countries (Turkey, Portugal, etc.)
- [ ] Export data functionality

### Priority 4: Data & Performance
- [ ] Add 50+ more geothermal plants to CSV
- [ ] Implement caching for API calls
- [ ] Add PWA support for offline access
- [ ] Optimize map rendering for mobile

### Priority 5: User Experience
- [ ] Dark/light mode toggle
- [ ] Multi-language support (English, Croatian, German, French)
- [ ] Mobile-first responsive improvements
- [ ] Accessibility improvements (WCAG compliance)

## 🐛 Known Issues

1. **CSV Loading**: Requires local server due to CORS policy
   - **Solution**: Use `python3 -m http.server` as documented
   
2. **Data Accuracy**: Some data is estimated/projected
   - **Note**: Clearly labeled in disclaimer section

## 📚 Learning Outcomes

This project demonstrates:
- ✅ HTML/CSS/JavaScript fundamentals
- ✅ Working with external data (CSV parsing)
- ✅ API integration concepts
- ✅ Map visualization with Leaflet.js
- ✅ Chart creation with Chart.js
- ✅ Git/GitHub workflow
- ✅ GitHub Pages deployment
- ✅ Understanding CORS and local development

## 🎯 Project Goals

1. ✅ Create functional web application
2. ✅ Learn infrastructure for online deployment
3. 🔄 Integrate real-time data (in progress)
4. ⏳ Build AI agent for automation (next project)

## 👨‍💻 Development Notes

### Session 1 (Feb 1, 2026)
- Set up development environment (Git, Cursor)
- Created basic HTML/CSS structure
- Added Chart.js for visualizations
- Implemented Leaflet.js map
- Deployed to GitHub Pages

### Session 2 (Feb 1, 2026)
- Separated data into CSV file
- Added 20 geothermal plants across Europe
- Replaced dummy data with real statistics
- Added data source disclaimer
- Documented project and next steps

## 🤝 Contributing

This is a personal learning project, but suggestions are welcome!

## 📄 License

MIT License - Feel free to use for learning purposes

## 🔗 Links

- **Live Site**: https://blackbirdd997.github.io/geothermal-dashboard/
- **GitHub Repo**: https://github.com/blackbirdd997/geothermal-dashboard

---

**Built with 🌍 passion for renewable energy and 🤖 AI by [@blackbirdd997](https://github.com/blackbirdd997)**
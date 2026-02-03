# 🎬 Netflix Cards Explorer

Welcome to **Netflix Cards Explorer**! A sleek and responsive React application that showcases a curated collection of popular series. From "Stranger Things" to "Lovely Runner," explore details about your favorite shows in a beautiful card interface. ✨

## 🚀 Features

- **Dynamic Content**: Series data is dynamically rendered from a structured JSON dataset.
- **Rich Details**: View series ratings, summaries, cast members, and genres at a glance.
- **Interactive UI**:
    - Smooth hover effects on buttons.
    - Beautiful gradient backgrounds for cards.
    - Responsive grid layout for all screen sizes.
- **Direct Streaming Integration**: "Watch Now" buttons link directly to Netflix or Viki for immediate viewing.

## 🛠️ Tech Stack

- **Frontend Library**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/) - for lightning-fast development.
- **Styling**: Custom CSS3 with modern features (Flexbox, Gradients, Shadows) & Tailwind CSS integration.
- **Data Management**: JSON-based data storage for easy updates.

## 📦 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository_url>
   ```

2. **Navigate to the project directory**
   ```bash
   cd netflix_cards
   ```

3. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Visit `http://localhost:5173` to see the app in action!

## 📂 Project Structure

```
netflix_cards/
├── public/              # Static assets
├── src/
│   ├── api/             # Data sources (seriesData.json)
│   ├── components/      # Reusable components (NetflixSeries.jsx)
│   ├── App.jsx          # Main application component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
└── package.json         # Project dependencies
```

---
*Created with ❤️ for React enthusiasts.*

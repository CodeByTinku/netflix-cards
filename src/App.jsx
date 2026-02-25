import { useState } from "react";
import NetflixSeries from "./components/NetflixSeries";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`main${darkMode ? " dark" : ""}`}>
      <button
        className="darkToggleBtn"
        onClick={() => setDarkMode((prev) => !prev)}
        aria-label="Toggle dark mode"
      >
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <NetflixSeries />
    </div>
  );
};
export default App;
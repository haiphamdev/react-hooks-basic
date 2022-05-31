import React, { useCallback, useState } from "react";
import "./App.scss";
import Hero from "./components/Hero";
import HomePage from "./pages/HomePage";

function App() {
  const [count, setCount] = useState(0);

  const handleHeroClick = useCallback(() => {}, []);

  return (
    <div className="app">
      {/* <HomePage /> */}
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name="Easy Frontend" onClick={handleHeroClick} />
    </div>
  );
}

export default App;

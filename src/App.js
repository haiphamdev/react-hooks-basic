import React, { useCallback, useEffect, useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import Pagination from "./components/Pagination";
import PostList from "./components/PostList";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import queryString from "query-string";
import PostFiltersForm from "./components/PostFiltersForm";
import Clock from "./components/Clock";
import BetterClock from "./components/BetterClock";
import MagicBox from "./components/MagicBox";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0);

  const handleHeroClick = useCallback(() => {}, []);

  return (
    <div className="app">
      <p>{count}</p>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Hero name="Easy Frontend" onClick={handleHeroClick} />
    </div>
  );
}

export default App;

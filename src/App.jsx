import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex flex-col items-center p-7 rounded-2xl">
        <div>
          <img className="size-48 shadow-xl ro" alt="" src="https://tailwindcss.com/_next/static/media/cover.de1997f7.png" />
        </div>
        <div className="flex">
          <span>Class Warfare</span>
          <span>The Anti-Patterns</span>
          <span className="flex">
            <span>No. 4</span>
            <span>·</span>
            <span>2025</span>
          </span>
        </div>
        <button className="p-4 m-2">Hello</button>
      </div>
    </>
  );
}

export default App;
